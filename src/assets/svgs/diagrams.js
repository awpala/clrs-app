import React from 'react';
import { black, gray, white } from '../../utilities/constants';

export const SortArrayElement = ({
  value,
  above,
  below,
  arrayIndex,
  isOutOfBoundsZero,
  currentStackFrameColor = black,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="41px" height="101px" viewBox="-0.5 -0.5 41 101" style={{ backgroundColor: white }}>
    <g>
      <rect x="0" y="40" width="40" height="40" fill="none" stroke={!isOutOfBoundsZero ? black : "none"} pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="64" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{value}</text>
      </g>
      <rect x="0" y="0" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="14" fill={currentStackFrameColor} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{above}</text>
      </g>
      <rect x="0" y="90" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="104" fill={currentStackFrameColor} fontFamily="Helvetica" fontSize="16px" textAnchor="middle">{below}</text>
      </g>
      <rect x="0" y="20" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="34" fill={gray} fontFamily="Helvetica" fontSize="10px" textAnchor="middle">{arrayIndex}</text>
      </g>
    </g>
  </svg>
);
