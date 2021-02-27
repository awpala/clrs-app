import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { InsertionSortStates } from './DiagramStates';
import { setVars, setDataStructures, setStackFrame } from '../../reducers/memory';
import SortArray from '../../objects/SortArray/SortArray';
import './DiagramInsertionSort.scss';

const DiagramInsertionSort = ({ currentSequence, setVars, setDataStructures, setStackFrame }) => {
  useEffect(() => {
    const currentStackFrame = 1;
    setStackFrame(currentStackFrame);
  }, []);

  useEffect(() => {
    const i = (InsertionSortStates[currentSequence].i || InsertionSortStates[currentSequence].i === 0) ? InsertionSortStates[currentSequence].i : 'NIL';
    const j = (InsertionSortStates[currentSequence].j || InsertionSortStates[currentSequence].j === 0) ? InsertionSortStates[currentSequence].j : 'NIL';
    const key = (InsertionSortStates[currentSequence].key || InsertionSortStates[currentSequence].key === 0) ? InsertionSortStates[currentSequence].key : 'NIL';

    const vars = {
      i,
      j,
      key,
    }

    const dataStructures = {
      A: InsertionSortStates[currentSequence].A,
    }

    setVars(vars);
    setDataStructures(dataStructures);
  }, [currentSequence]);

  return (
    <div className="diagram-insertion-sort">
      <SortArray
        A={InsertionSortStates[currentSequence].A}
        aboveValue={InsertionSortStates[currentSequence].j}
        aboveContent="j"
        belowValue={InsertionSortStates[currentSequence].i}
        belowContent="i"
      />
      <div className="diagram-insertion-sort-variables">
        <p>key: {InsertionSortStates[currentSequence].key ? InsertionSortStates[currentSequence].key : 'NIL'}</p>
        {(InsertionSortStates[currentSequence].i === 0) ? <p>i = 0</p> : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentSequence: state.pseudocode.currentSequence,
});

const mapDispatchToProps = dispatch => ({
  setVars: (vars) => dispatch(setVars(vars)),
  setDataStructures: (dataStructures) => dispatch(setDataStructures(dataStructures)),
  setStackFrame: (currentStackFrame) => dispatch(setStackFrame(currentStackFrame)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiagramInsertionSort);
