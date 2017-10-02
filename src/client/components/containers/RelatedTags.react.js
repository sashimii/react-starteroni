/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';

import Tag from '../ui/Tag.react';

import styles from './RelatedTags.scss';

type Props = {
  tags: Array<string>
};

const RelatedTags = ({ tags }: Props): React$Element<> => {
  const TagList = ({ tags }: Props): React$Element<> => {
    return (
      <ul>
        {tags.map((tag, index) => {
          return (
            <li
              styleName="related-tags-list-item"
              key={`filed-under-tag-${index}`}
            >
              <Tag>{tag}</Tag>
            </li>
          );
        })}
      </ul>
    );
  };

  const StyledTagList = CSSModules(TagList, styles);

  return (
    <div styleName="related-tags-container">
      <div styleName="related-tags-row">
        <h4 styleName="related-tags-text">Filed Under</h4>
        <div>
          <StyledTagList tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default CSSModules(RelatedTags, styles);
