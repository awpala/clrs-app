import React from 'react';

export const SortArrayElement = ({ value, above, below }) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="41px" height="101px" viewBox="-0.5 -0.5 41 101" style={{ backgroundColor: "rgb(255, 255, 255)"}}>
    <g>
      <rect x="0" y="30" width="40" height="40" fill="none" stroke="#000000" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="54" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{value}</text>
      </g>
      <rect x="0" y="0" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="14" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{above}</text>
      </g>
      <rect x="0" y="80" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
      <g transform="translate(-0.5 -0.5)">
        <text x="20" y="94" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{below}</text>
      </g>
    </g>
  </svg>
);
