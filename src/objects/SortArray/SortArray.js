import React from 'react';
import { SortArrayElement } from '../../assets/svgs/diagrams';

const SortArray = ({
  A,
  isOutOfBoundsZero,
  aboveValue,
  aboveContent,
  belowValue,
  belowContent,
  currentStackFrameColor,
}) => (
  <div className="sort-array">
    {isOutOfBoundsZero
      ? (
        <div className="sort-array-element">
          <SortArrayElement
            isOutOfBoundsZero
            arrayIndex={0}
            below={(belowValue === 0) ? belowContent : null}
            currentStackFrameColor={currentStackFrameColor}
          />
        </div>
      ): null
    }
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
            currentStackFrameColor={currentStackFrameColor}
          />
        </div>
      )
    )}
  </div>
);

export default SortArray;
