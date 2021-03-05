import { connect } from 'react-redux';
import InsertionSort from './InsertionSort';
import { setTotalSequences } from '../../reducers/pseudocode';

const mapStateToProps = state => ({
  currentSequence: state.pseudocode.currentSequence,
});

const mapDispatchToProps = dispatch => ({
  setTotalSequences: (totalSequences) => dispatch(setTotalSequences(totalSequences)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertionSort);
