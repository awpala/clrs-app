import React, { useEffect } from 'react';
import { PlaybackButton, SkipButtons } from '../../assets/svgs/controls';
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
        <div className="controls-playback">
          <PlaybackButton
            isPlaying={isPlaying}
            setToPlay={setToPlay}
            setToPause={setToPause}
            currentSpeed={currentSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
            isCompleted={currentSequence === totalSequences}
            resetPlay={resetPlay}
          />
          <p className="controls-playback-speed">{1000 / currentSpeed} {`sequence${(1000 / currentSpeed) === 1 ? '' : 's'}/second`}</p>
        </div>
        <div className="controls-skip">
          <SkipButtons
            isPlaying={isPlaying}
            totalSequences={totalSequences}
            currentSequence={currentSequence}
            first={() => (!isPlaying && currentSequence > 1) ? setCurrentSequence(1) : null}
            decrement={() => (!isPlaying && currentSequence > 1) ? decrementCurrentSequence(currentSequence) : null}
            increment={() => (!isPlaying && currentSequence < totalSequences) ? incrementCurrentSequence(currentSequence, totalSequences) : null}
            last={() => (!isPlaying && currentSequence < totalSequences) ? setCurrentSequence(totalSequences) : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Controls;
