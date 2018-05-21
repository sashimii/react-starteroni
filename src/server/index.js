import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import bodyParser from 'body-parser';
import { collectInitial } from 'node-style-loader/collect';
import { minify } from 'html-minifier';

import apiRouter from './routes';

import Paragraph from '../client/components/ui/Paragraph.react';
import App from '../client/components/App.react';

// do not call this before your application component has been imported
const initialStyleTag = collectInitial();

const app = express();

const viewsRouter = express.Router();

// parse application/json
app.use(bodyParser.json());
// retrieve static files from /public
app.use('/public', express.static('dist/public'));

viewsRouter.get('/', function(req, res) {
  // global.__universal__.replay();
  // console.log();
  // const Styles = global.__universal__.reactStyles(React);
  res.send(
    minify(
      `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        ${initialStyleTag}
      </head>
      <body>
        <div id="app">${ReactDOMServer.renderToString(<App />)}</div>
        <script src="public/bundle.js"></script>
      </body>
    </html>`,
      {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        sortClassName: true,
        sortAttributes: true,
        useShortDoctype: true,
        removeAttributeQuotes: true
      }
    )
  );
});

app.use('/', viewsRouter);
app.use('/api', apiRouter);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
