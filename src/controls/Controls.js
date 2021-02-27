import React from 'react';
import { connect } from 'react-redux';
import { decrementCurrentSequence, incrementCurrentSequence } from '../reducers/pseudocode';

const Controls = ({ decrementCurrentSequence, incrementCurrentSequence, totalSequences, currentSequence }) => (
  <div className="controls">
    <button onClick={() => decrementCurrentSequence(currentSequence)}>-</button>
    <button onClick={() => incrementCurrentSequence(currentSequence, totalSequences)}>+</button>
  </div>
)

const mapStateToProps = state => ({
  totalSequences: state.pseudocode.totalSequences,
  currentSequence: state.pseudocode.currentSequence,
})

const mapDispatchToProps = dispatch => ({
  decrementCurrentSequence: (currentSequence) => dispatch(decrementCurrentSequence(currentSequence)),
  incrementCurrentSequence: (currentSequence, totalSequences) => dispatch(incrementCurrentSequence(currentSequence, totalSequences)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Controls)