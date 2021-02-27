import React from 'react';

const SortArray = ({ array, aboveValue, aboveContent, belowValue, belowContent }) => (
  <div className="sort-array">
    {array.map((element, index) => (
        <div
          key={index}
          className="sort-array-element"
        >
          <div className="sort-array-element-above">{(index + 1 === aboveValue) ? aboveContent : null}</div>
          <div className="sort-array-element-value">{element}</div>
          <div className="sort-array-element-below">{(index + 1 === belowValue) ? belowContent : null}</div>
        </div>
      )
    )}
  </div>
);

export default SortArray;