import { connect } from 'react-redux';
import SortArray from './SortArray';

const mapStateToProps = state => ({
  currentStackFrameColor: state.memory.currentStackFrameColor,
});

export default connect(mapStateToProps)(SortArray);
