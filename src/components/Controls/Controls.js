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
          <div className="dummy">dummy</div> {/* workaround to prevent highlighting within div `controls-playback-speed` due to rapid-succession clicks of playback button */}
          <p className={`controls-playback-speed ${isPlaying ? 'active' : 'inactive'}`}>{1000 / currentSpeed} {`sequence${(1000 / currentSpeed) === 1 ? '' : 's'}/second`}</p>
          <div className="dummy">dummy</div> {/* workaround to prevent highlighting within div `controls-playback` due to rapid-succession clicks of skip buttons */}
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
