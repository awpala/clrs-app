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
    const i = (InsertionSortStates[currentSequence].i || InsertionSortStates[currentSequence].i === 0) ? InsertionSortStates[currentSequence].i : 'NIL';
    const j = (InsertionSortStates[currentSequence].j || InsertionSortStates[currentSequence].j === 0) ? InsertionSortStates[currentSequence].j : 'NIL';
    const key = (InsertionSortStates[currentSequence].key || InsertionSortStates[currentSequence].key === 0) ? InsertionSortStates[currentSequence].key : 'NIL';

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
        <p className="array-name">A</p>
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
        <p>key: {InsertionSortStates[currentSequence].key ? InsertionSortStates[currentSequence].key : 'NIL'}</p>
      </div>
    </div>
  );
}

export default DiagramInsertionSort;
