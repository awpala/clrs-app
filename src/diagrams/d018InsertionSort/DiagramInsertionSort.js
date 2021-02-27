import React from 'react';
import { connect } from 'react-redux';
import { InsertionSortStates } from './DiagramStates'; 
import SortArray from '../../objects/SortArray/SortArray';
import './DiagramInsertionSort.scss';

const DiagramInsertionSort = ({ currentSequence }) => {

  return (
    <div className="diagram-insertion-sort">
      <SortArray
        array={InsertionSortStates[currentSequence].array}
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

export default connect(mapStateToProps)(DiagramInsertionSort);