import React, { useEffect } from 'react';
import { InsertionSortStates } from '../../states/s018InsertionSort';
import SortArray from '../../objects/SortArray';
import './DiagramInsertionSort.scss';

const DiagramInsertionSort = ({ 
  currentSequence,
  setVars,
  setDataStructures, 
  setStackFrame, 
  setStackFrameColor,
}) => {
  useEffect(() => {
    const currentStackFrame = 1;
    setStackFrame(currentStackFrame);
    setStackFrameColor(currentStackFrame);
  }, [setStackFrame, setStackFrameColor]);

  useEffect(() => {
    const i = InsertionSortStates[currentSequence].i;
    const j = InsertionSortStates[currentSequence].j;
    const key = InsertionSortStates[currentSequence].key;

    const vars = { i, j, key, };

    const dataStructures = {
      A: InsertionSortStates[currentSequence].A,
    };

    setVars(vars);
    setDataStructures(dataStructures);
  }, [currentSequence, setVars, setDataStructures]);

  return (
    <div className="diagram-insertion-sort">
      <div className="array">
        <p className="array-name">*A</p>
        <SortArray
          A={InsertionSortStates[currentSequence].A}
          isOutOfBoundsZero
          aboveValue={InsertionSortStates[currentSequence].j}
          aboveContent="j"
          belowValue={InsertionSortStates[currentSequence].i}
          belowContent="i"
        />
      </div>
      <div className="diagram-insertion-sort-variables">
        <p>key: {InsertionSortStates[currentSequence].key}</p>
      </div>
    </div>
  );
}

export default DiagramInsertionSort;
