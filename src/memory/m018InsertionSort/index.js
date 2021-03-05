import { connect } from 'react-redux';
import MemoryInsertionSort from './MemoryInsertionSort';

const mapStateToProps = state => ({
  vars: state.memory.vars,
  dataStructures: state.memory.dataStructures,
  currentStackFrame: state.memory.currentStackFrame,
  currentStackFrameColor: state.memory.currentStackFrameColor,
});

export default connect(mapStateToProps)(MemoryInsertionSort);
