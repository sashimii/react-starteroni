const fs = require('fs');

function readJSFiles(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, stats) => {
      let jsFilesToCheck = [];
      stats.forEach((item) => {
        let itemInfo = item.split('.');
        if(itemInfo[1] === 'react' || itemInfo[1] == 'js') {
          jsFilesToCheck.push(directoryPath + itemInfo[0]);
        }
      });
      resolve(jsFilesToCheck);
    });
  });
}


readJSFiles('./src/client/').then((files) => {
  console.log(files);
});
