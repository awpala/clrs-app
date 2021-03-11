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
      const timer = setTimeout(() => {
        incrementCurrentSequence(currentSequence, totalSequences);
      }, currentSpeed);
      
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line 
  }, [isPlaying, currentSequence, totalSequences]);
  
  useEffect(() => {
    if (currentSequence === totalSequences) {
      setToPause();
    }
  // eslint-disable-next-line 
  }, [currentSequence, totalSequences]);

  const resetPlay = () => {
    if (currentSequence === totalSequences) {
      setToPlay();
      setCurrentSequence(1);
    }
  }

  // keyboard shortcuts
  const keyPresses = {
    // skip to beginning
    a: useKeyPress('a'),
    A: useKeyPress('A'),
    Four: useKeyPress('4'),
    // decrement sequence
    s: useKeyPress('s'),
    S: useKeyPress('S'),
    Two: useKeyPress('2'),
    // increment sequence
    d: useKeyPress('d'),
    D: useKeyPress('D'),
    Eight: useKeyPress('8'),
    // skip to end
    f: useKeyPress('f'),
    F: useKeyPress('F'),
    Six: useKeyPress('6'),
    // play/pause/restart
    w: useKeyPress('w'),
    W: useKeyPress('W'),
    Zero: useKeyPress('0'),
    // decrease playback speed
    q: useKeyPress('q'),
    Q: useKeyPress('Q'),
    Subtract: useKeyPress('-'),
    // increase playback speed
    e: useKeyPress('e'),
    E: useKeyPress('E'),
    Add: useKeyPress('+'),
  };

  const {
    a, A, Four,
    s, S, Two,
    d, D, Eight,
    f, F, Six,
    w, W, Zero,
    q, Q, Subtract,
    e, E, Add,
  } = keyPresses;

  useEffect(() => {
    const playbackSpeeds = [ _01, _05, _1, _5, _10, _50, _100 ];

    if (a || A || Two) {
      if (currentSequence >= 1) {
        setToPause();
        setCurrentSequence(1);
      }
    } else if (s || S || Four) {
      if (currentSequence > 1) {
        setToPause();
        setCurrentSequence(currentSequence - 1);
      }
    } else if (d || D || Six) {
      if (currentSequence < totalSequences) {
        setToPause();
        setCurrentSequence(currentSequence + 1);
      }
    } else if (f || F || Eight) {
      if (currentSequence <= totalSequences) {
        setToPause();
        setCurrentSequence(totalSequences);
      }
    } else if (w || W || Zero) {
      if (isPlaying && (currentSequence < totalSequences)) {
        setToPause();
      } else if (!isPlaying && (currentSequence < totalSequences)) {
        setToPlay();
      } else if (!isPlaying && (currentSequence === totalSequences)) {
        resetPlay();
      }
    } else if (q || Q || Subtract) {
      if (currentSpeed < _01) {
        const currentSpeedIndex = playbackSpeeds.findIndex(speed => speed === currentSpeed);
        setPlaybackSpeed(playbackSpeeds[currentSpeedIndex - 1]);
      }
    } else if (e || E || Add) {
      if (currentSpeed > _100) {
        const currentSpeedIndex = playbackSpeeds.findIndex(speed => speed === currentSpeed);
        setPlaybackSpeed(playbackSpeeds[currentSpeedIndex + 1]);
      }
    }
  // eslint-disable-next-line 
  }, [
    a, A, Four,
    s, S, Two,
    d, D, Eight,
    f, F, Six,
    w, W, Zero,
    q, Q, Subtract,
    e, E, Add,
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
            first={() => (currentSequence > 1) ? setCurrentSequence(1) : null}
            decrement={() => (currentSequence > 1) ? decrementCurrentSequence(currentSequence) : null}
            increment={() => (currentSequence < totalSequences) ? incrementCurrentSequence(currentSequence, totalSequences) : null}
            last={() => (currentSequence < totalSequences) ? setCurrentSequence(totalSequences) : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Controls;
