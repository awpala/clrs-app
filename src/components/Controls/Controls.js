import React, { useEffect } from 'react';
import { PlaybackButton } from '../../assets/svgs/controls';
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

export default Controls;
