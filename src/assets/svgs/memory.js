import React from 'react';
import { black } from '../../utilities/constants';

export const StackFrame = ({
  dataStructures: { ds1, ds2, ds3 },
  vars: { var1, var2, var3, var4, var5 },
  isCurrentStackFrame,
  currentStackFrameColor,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="621px" height="212px" viewBox="-0.5 -0.5 621 212" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
    <g>
      <rect x="0" y="0" width="470" height="210" fill="none" stroke={currentStackFrameColor} pointerEvents="all"/>
      <path d="M 235 210 L 235 0" fill="none" stroke={black} strokeMiterlimit="10" strokeDasharray="3 3" pointerEvents="stroke"/>
      {/* begin stack frame arrow */}
      {isCurrentStackFrame
        ? (
          <g>
            <path d="M 619.5 99.88 L 619.5 109.88 L 560 109.88 L 515.91 109.88 L 515.91 118.4 L 490.5 104.88 L 515.91 91.36 L 515.91 99.88 L 560 99.88 Q 560 99.88 560 99.88 Z" fill={currentStackFrameColor} stroke={black} strokeLinejoin="round" strokeMiterlimit="10" pointerEvents="all"/>
            <path d="M 515.91 109.88 L 515.91 118.4 L 490.5 104.88 L 515.91 91.36 L 515.91 99.88" fill={currentStackFrameColor} stroke={black} strokeLinejoin="flat" strokeMiterlimit="4" pointerEvents="all"/>
          </g>
        )
        : null
      }
      {/* end stack frame arrow */}
      <g transform="translate(-0.5 -0.5)">
        <rect x="40" y="35" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="120" y="49" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1 ? ds1 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="40" y="95" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="120" y="109" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2 ? ds2 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="40" y="155" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="120" y="169" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds3 ? ds3 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="290" y="15" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="310" y="29" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var1 ? var1 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="290" y="55" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="310" y="69" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var2 ? var2 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="290" y="95" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="310" y="109" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var3 ? var3 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="290" y="135" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="310" y="149" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var4 ? var4 : null}</text>
      </g>
      <g transform="translate(-0.5 -0.5)">
        <rect x="290" y="175" width="40" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <text x="310" y="189" fill={black} fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var5 ? var5 : null}</text>
      </g>
    </g>
  </svg>
);
