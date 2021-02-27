import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSequence, decrementCurrentSequence, incrementCurrentSequence } from '../reducers/pseudocode';

const Controls = ({ setCurrentSequence, decrementCurrentSequence, incrementCurrentSequence, totalSequences, currentSequence }) => (
  <div className="controls">
    <button onClick={() => setCurrentSequence(1)}>First</button>
    <button onClick={() => decrementCurrentSequence(currentSequence)}>-</button>
    <button onClick={() => incrementCurrentSequence(currentSequence, totalSequences)}>+</button>
    <button onClick={() => setCurrentSequence(totalSequences)}>Last</button>
  </div>
)

const mapStateToProps = state => ({
  totalSequences: state.pseudocode.totalSequences,
  currentSequence: state.pseudocode.currentSequence,
})

const mapDispatchToProps = dispatch => ({
  setCurrentSequence: (currentSequence) => dispatch(setCurrentSequence(currentSequence)),
  decrementCurrentSequence: (currentSequence) => dispatch(decrementCurrentSequence(currentSequence)),
  incrementCurrentSequence: (currentSequence, totalSequences) => dispatch(incrementCurrentSequence(currentSequence, totalSequences)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Controls)