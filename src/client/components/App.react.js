/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';
import Excited from './Excited.react';
import Article from './containers/Article.react';
import SocialMediaButtons from './containers/SocialMediaButtons.react';
import NavigationBar from './containers/NavigationBar.react';
import RelatedTags from './containers/RelatedTags.react';
import SubscriptionBox from './containers/SubscriptionBox.react';

import Paragraph from './ui/Paragraph.react';
import HeroImage from './ui/HeroImage.react';
import Header from './ui/Header.react';
import Button from './ui/Button.react';
import Advert from './ui/Advert.react';
import Tag from './ui/Tag.react';
import SubscriptionInput from './ui/SubscriptionInput.react';

export const App = ({ a, b }: { a: string, b: string }): React$Element<> => (
  <div styleName="app-style">
    <NavigationBar />
    <Header
      heading="Hello World, This Is Dog"
      subheading="This is a subheading"
    />
    <HeroImage caption="This is the image caption" />
    <SocialMediaButtons>
      <Button text="C" shape="round" color="#006EC5" />
      <Button text="C" shape="round" color="#60B8FF" />
      <Button text="C" shape="round" color="#C59300" />
    </SocialMediaButtons>
    <Article>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Article>
    <RelatedTags tags={['Lorem', 'Ipsum']} />
    <SubscriptionBox />
    <Advert />
  </div>
);

export default CSSModules(App, styles);
