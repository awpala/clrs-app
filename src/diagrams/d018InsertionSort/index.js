import { connect } from 'react-redux';
import DiagramInsertionSort from './DiagramInsertionSort';
import {
  setVars,
  setDataStructures,
  setStackFrame,
  setStackFrameColor,
} from '../../reducers/memory';

const mapStateToProps = state => ({
  currentSequence: state.pseudocode.currentSequence,
});

const mapDispatchToProps = dispatch => ({
  setVars: (vars) => dispatch(setVars(vars)),
  setDataStructures: (dataStructures) => dispatch(setDataStructures(dataStructures)),
  setStackFrame: (currentStackFrame) => dispatch(setStackFrame(currentStackFrame)),
  setStackFrameColor: (currentStackFrame) => dispatch(setStackFrameColor(currentStackFrame)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiagramInsertionSort);
