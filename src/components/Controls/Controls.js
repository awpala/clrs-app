import React, { useEffect } from 'react';
import { PlaybackButton, SkipButtons } from '../../assets/svgs/controls';
import { useKeyPress } from '../../hooks/useKeyPress';
import { _01, _05, _1, _5, _10, _50, _100 } from '../../utilities/constants';
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

  // keyboard shortcuts
  const keyPresses = {
    // skip to beginning
    A: 'a',
    FOUR: '4',
    // decrement sequence
    S: 's',
    TWO: '2',
    // increment sequence
    D: 'd',
    EIGHT: '8',
    // skip to end
    F: 'f',
    SIX: '6',
    // play/pause/restart
    W: 'w',
    ZERO: '0',
    // decrease playback speed
    SUBTRACT: '-',
    // increase playback speed
    ADD: '+',
  };
  
  const keyA = useKeyPress(keyPresses.A);
  const keyTwo = useKeyPress(keyPresses.TWO);
  const keyS = useKeyPress(keyPresses.S);
  const keyFour = useKeyPress(keyPresses.FOUR);
  const keyD = useKeyPress(keyPresses.D);
  const keySix = useKeyPress(keyPresses.SIX);
  const keyF = useKeyPress(keyPresses.F);
  const keyEight = useKeyPress(keyPresses.EIGHT);
  const keyW = useKeyPress(keyPresses.W);
  const keyZero = useKeyPress(keyPresses.ZERO);
  const keyAdd = useKeyPress(keyPresses.ADD);
  const keySubtract = useKeyPress(keyPresses.SUBTRACT);

  const playbackSpeeds = [ _01, _05, _1, _5, _10, _50, _100 ];

  useEffect(() => {
    if (keyA || keyTwo) {
      if (currentSequence >= 1) {
        setToPause();
        setCurrentSequence(1);
      }
    } else if (keyS || keyFour) {
      if (currentSequence > 1) {
        setToPause();
        setCurrentSequence(currentSequence - 1);
      }
    } else if (keyD || keySix) {
      if (currentSequence < totalSequences) {
        setToPause();
        setCurrentSequence(currentSequence + 1);
      }
    } else if (keyF || keyEight) {
      if (currentSequence <= totalSequences) {
        setToPause();
        setCurrentSequence(totalSequences);
      }
    } else if (keyW || keyZero) {
      if (isPlaying && (currentSequence < totalSequences)) {
        setToPause();
      } else if (!isPlaying && (currentSequence < totalSequences)) {
        setToPlay();
      } else if (!isPlaying && (currentSequence === totalSequences)) {
        resetPlay();
      }
    } else if (keySubtract) {
      if (!isPlaying && currentSpeed < _01) {
        const currentSpeedIndex = playbackSpeeds.findIndex(speed => speed === currentSpeed);
        setPlaybackSpeed(playbackSpeeds[currentSpeedIndex - 1]);
      }
    } else if (keyAdd) {
      if (!isPlaying && currentSpeed > _100) {
        const currentSpeedIndex = playbackSpeeds.findIndex(speed => speed === currentSpeed);
        setPlaybackSpeed(playbackSpeeds[currentSpeedIndex + 1]);
      }
    }
  // eslint-disable-next-line 
  }, [
    keyA, keyTwo,
    keyS, keyFour,
    keyD, keySix,
    keyF, keyEight,
    keyW, keyZero,
    keyAdd,
    keySubtract,
  ]);

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
          <p className={`controls-playback-speed ${isPlaying ? 'active' : 'inactive'}`}>
            {1000 / currentSpeed} {`sequence${(1000 / currentSpeed) === 1 ? '' : 's'}/second`}
          </p>
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
