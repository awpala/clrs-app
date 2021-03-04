import React from 'react';
import { SortArrayElement } from '../../assets/svgs/diagrams';

const SortArray = ({ A, aboveValue, aboveContent, belowValue, belowContent }) => (
  <div className="sort-array">
    <div className="sort-array-element">
      <SortArrayElement
        isOutOfBoundsZero
        below={(belowValue === 0) ? belowContent : null}
        arrayIndex={0}
      />
    </div>
    {A.map((element, index) => (
        <div
          key={index}
          className="sort-array-element"
        >
          <SortArrayElement
            arrayIndex={index + 1}
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
