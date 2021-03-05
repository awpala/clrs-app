import { connect } from 'react-redux';
import Controls from './Controls';
import { 
  setCurrentSequence,
  decrementCurrentSequence,
  incrementCurrentSequence,
} from '../../reducers/pseudocode';
import {
  setToPlay,
  setToPause,
  setPlaybackSpeed,
} from '../../reducers/controls';

const mapStateToProps = state => ({
  totalSequences: state.pseudocode.totalSequences,
  currentSequence: state.pseudocode.currentSequence,
  isPlaying: state.controls.isPlaying,
  currentSpeed: state.controls.currentSpeed,
});

const mapDispatchToProps = dispatch => ({
  setCurrentSequence: (currentSequence) => dispatch(setCurrentSequence(currentSequence)),
  decrementCurrentSequence: (currentSequence) => dispatch(decrementCurrentSequence(currentSequence)),
  incrementCurrentSequence: (currentSequence, totalSequences) => dispatch(incrementCurrentSequence(currentSequence, totalSequences)),
  setToPlay: () => dispatch(setToPlay()),
  setToPause: () => dispatch(setToPause()),
  setPlaybackSpeed: (newSpeed) => dispatch(setPlaybackSpeed(newSpeed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
