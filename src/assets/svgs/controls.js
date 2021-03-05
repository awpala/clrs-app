import React from 'react';

// colors
const black = 'black';
const gray = '#999999';

// playback speeds
const sec = 1000;
const _01 = sec / 0.1;
const _05 = sec / 0.5;
const _1 = sec * 1;
const _5 = sec / 5;
const _10 = sec / 10;
const _50 = sec /50;
const _100 = sec / 100;

export const PlaybackButton = ({
  isPlaying = false,
  setToPlay,
  setToPause,
  currentSpeed = _1,
  setPlaybackSpeed,
  isCompleted,
  resetPlay,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="87px" height="78px" viewBox="-0.5 -0.5 87 78" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
    <g>
      <ellipse cx="45" cy="40" rx="25" ry="25" fill="none" stroke={black} pointerEvents="all"/>

      <g onClick={() => setPlaybackSpeed(_01)}>
        <rect x="0" y="35" width="20" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="24.5" cy="40" rx="1.5" ry="1.5" fill={currentSpeed <= _01 ? black : "none"} stroke={currentSpeed <= _01 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="10" y="44" fill={currentSpeed === _01 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">0.1</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_05)}>
        <rect x="6" y="14" width="20" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="30.5" cy="25.5" rx="1.5" ry="1.5" fill={currentSpeed <= _05 ? black : "none"} stroke={currentSpeed <= _05 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="16" y="23" fill={currentSpeed === _05 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">0.5</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_1)}>
        <rect x="35" y="2" width="20" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="45" cy="19" rx="1.5" ry="1.5" fill={currentSpeed <= _1 ? black : "none"} stroke={currentSpeed <= _1 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="45" y="11" fill={currentSpeed === _1 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">1</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_5)}>
        <rect x="64" y="14" width="14" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="59.5" cy="25.5" rx="1.5" ry="1.5" fill={currentSpeed <= _5 ? black : "none"} stroke={currentSpeed <= _5 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="71" y="23" fill={currentSpeed === _5 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">5</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_10)}>
        <rect x="72" y="35" width="14" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="65.5" cy="40" rx="1.5" ry="1.5" fill={currentSpeed <= _10 ? black : "none"} stroke={currentSpeed <= _10 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="79" y="44" fill={currentSpeed === _10 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">10</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_50)}>
        <rect x="65" y="56" width="14" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="59.5" cy="54.5" rx="1.5" ry="1.5" fill={currentSpeed <= _50 ? black : "none"} stroke={currentSpeed <= _50 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="73" y="65" fill={currentSpeed === _50 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">50</text>
        </g>
      </g>

      <g onClick={() => setPlaybackSpeed(_100)}>
        <rect x="35" y="66" width="20" height="10" fill="none" stroke="none" pointerEvents="all"/>
        <ellipse cx="45" cy="61" rx="1.5" ry="1.5" fill={currentSpeed <= _100 ? black : "none"} stroke={currentSpeed <= _100 ? black : gray} pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="45" y="78" fill={currentSpeed === _100 ? black : gray} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">100</text>
        </g>
      </g>

      {(!isPlaying && !isCompleted)
        && (
          <g onClick={() => setToPlay()}>
            <rect x="33" y="28" width="24" height="24" fill="none" stroke={black} pointerEvents="all"/>
            <path d="M 38 31 L 53 40 L 38 49 Z" fill={black} stroke={black} strokeMiterlimit="10" pointerEvents="all"/>
          </g>
        )
      }
      {(isPlaying && !isCompleted)
        && (
          <g onClick={() => setToPause()}>
            <rect x="33" y="28" width="24" height="24" fill="none" stroke={black} pointerEvents="all"/>
            <rect x="38" y="31" width="4" height="18" fill={black} stroke={black} pointerEvents="all"/>
            <rect x="48" y="31" width="4" height="18" fill={black} stroke={black} pointerEvents="all"/>
          </g>
        )
      }
      {(!isPlaying && isCompleted)
        && (
          <g onClick={() => resetPlay()}>
            <rect x="33" y="28" width="24" height="24" fill="none" stroke={black} pointerEvents="all"/>
            <path d="M 54 40.94 C 54 44 51.93 46.76 48.75 47.92 C 45.58 49.09 41.92 48.45 39.49 46.29 C 37.06 44.13 36.33 40.88 37.65 38.05 C 38.96 35.23 42.06 33.39 45.5 33.39" fill="none" stroke={black} strokeWidth="2" strokeMiterlimit="10" pointerEvents="all"/>
            <path d="M 45.5 31.5 L 48.69 33.39 L 45.5 35.28 Z" fill={black} stroke={black} strokeWidth="2" strokeMiterlimit="10" pointerEvents="all"/>
          </g>
        )
      }
    </g>
  </svg>
);
