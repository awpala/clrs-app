import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  setCurrentSequence,
  decrementCurrentSequence,
  incrementCurrentSequence
} from '../reducers/pseudocode';
import { setToPlay, setToPause, setPlaybackSpeed } from '../reducers/controls';
import { PlaybackButton } from '../assets/svgs/controls';
import './Controls.scss';

const Controls = ({
  setCurrentSequence,
  decrementCurrentSequence,
  incrementCurrentSequence,
  totalSequences,
  currentSequence,
  isPlaying,
  setToPlay,
  setToPause,
  currentSpeed,
  setPlaybackSpeed,
}) => {
  useEffect(() => {
    if (isPlaying && (currentSequence < totalSequences)) {
      setTimeout(() => {
        incrementCurrentSequence(currentSequence, totalSequences);
      }, currentSpeed)
    }
  }, [isPlaying, currentSpeed, currentSequence, totalSequences, incrementCurrentSequence])
  
  useEffect(() => {
    if (currentSequence === totalSequences) {
      setToPause();
    }
  }, [currentSequence, totalSequences, setToPause])

  const resetPlay = () => {
    if (currentSequence === totalSequences) {
      setToPlay();
      setCurrentSequence(1);
    }
  }

  return (
    <div className="controls">
      <div className="controls-panel">
        <PlaybackButton
          isPlaying={isPlaying}
          setToPlay={setToPlay}
          setToPause={setToPause}
          currentSpeed={currentSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
          isCompleted={currentSequence === totalSequences}
          resetPlay={resetPlay}
        />
        <div className="controls-buttons">
          <button onClick={() => setCurrentSequence(1)}>First</button>
          <button onClick={() => decrementCurrentSequence(currentSequence)}>-</button>
          <button onClick={() => incrementCurrentSequence(currentSequence, totalSequences)}>+</button>
          <button onClick={() => setCurrentSequence(totalSequences)}>Last</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  totalSequences: state.pseudocode.totalSequences,
  currentSequence: state.pseudocode.currentSequence,
  isPlaying: state.controls.isPlaying,
  currentSpeed: state.controls.currentSpeed,
})

const mapDispatchToProps = dispatch => ({
  setCurrentSequence: (currentSequence) => dispatch(setCurrentSequence(currentSequence)),
  decrementCurrentSequence: (currentSequence) => dispatch(decrementCurrentSequence(currentSequence)),
  incrementCurrentSequence: (currentSequence, totalSequences) => dispatch(incrementCurrentSequence(currentSequence, totalSequences)),
  setToPlay: () => dispatch(setToPlay()),
  setToPause: () => dispatch(setToPause()),
  setPlaybackSpeed: (newSpeed) => dispatch(setPlaybackSpeed(newSpeed)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Controls)