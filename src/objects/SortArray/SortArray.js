import React from 'react';
import { SortArrayElement } from '../../assets/svgs';

const SortArray = ({ array, aboveValue, aboveContent, belowValue, belowContent }) => (
  <div className="sort-array">
    {array.map((element, index) => (
        <div
          key={index}
          className="sort-array-element"
        >
          <SortArrayElement
            value={element}
            above={(index + 1 === aboveValue) ? aboveContent : null}
            below={(index + 1 === belowValue) ? belowContent : null}
          />
        </div>
      )
    )}
  </div>
);

export default SortArray;
