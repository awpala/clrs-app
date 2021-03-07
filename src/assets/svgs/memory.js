import React from 'react';
import { black } from '../../utilities/constants';

export const StackFrame = ({
  currentStackFrame = 0,
  isCurrentStackFrame = false,
  currentStackFrameColor = black,
  dataStructures: { 
    ds1: {
      ds1 = null,
      ds1Val = null,
      ds1Attr1 = null,
      ds1Attr2 = null,
      ds1Attr3 = null,
    }, 
    ds2: {
      ds2 = null,
      ds2Val = null,
      ds2Attr1 = null,
      ds2Attr2 = null,
      ds2Attr3 = null,
    },
  },
  vars: {
    var1 = null,
    var2 = null,
    var3 = null,
    var4 = null,
  },
  fn: {
    fn = null,
    arg1Val = null,
    arg2Val = null,
    arg3Val = null,
    arg4Val = null,
  },
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="530px" height="132px" viewBox="-0.5 -0.5 521 132" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
    <g>
      <g>
        <rect x="0" y="55" width="70" height="20" fill="none" stroke="none" pointerEvents="all"/>
        <g transform="translate(-0.5 -0.5)">
          <text x="35" y="69" fill={currentStackFrameColor} fontFamily="Helvetica" fontSize="12px" textAnchor="middle" fontWeight="bold">Stack Frame {currentStackFrame ? currentStackFrame : 0}</text>
        </g>
      </g>
      <g>
        <rect x="80" y="0" width="350" height="130" fill="none" stroke={currentStackFrameColor} pointerEvents="all"/>
        <path d="M 255 130 L 254.8 0" fill="none" stroke={black} strokeMiterlimit="10" strokeDasharray="3 3" pointerEvents="stroke"/>
        <path d="M 255 65 L 430 65" fill="none" stroke={black} strokeMiterlimit="10" strokeDasharray="3 3" pointerEvents="stroke"/>
        <g>
          <g>
            <rect x="110" y="0" width="110" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="165" y="14" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Data Structure Objects</text>
            </g>
          </g>
          {ds1
            ? (
              <g>
                <rect x="150" y="20" width="30" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="165" y="29" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1}</text>
                </g>
                <rect x="90" y="31" width="150" height="39" fill="none" stroke="#000000" pointerEvents="all"/>
                <rect x="120" y="40" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="135" y="54" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1Val}</text>
                </g>
                <rect x="180" y="31" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="40" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1Attr1}</text>
                </g>
                <rect x="180" y="45" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="54" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1Attr2}</text>
                </g>
                <rect x="180" y="58" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="67" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds1Attr3}</text>
                </g>
              </g>
            ) : null
          }
          {ds2
            ? (
              <g>
                <rect x="150" y="76" width="30" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="165" y="85" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2}</text>
                </g>
                <rect x="90" y="87" width="150" height="39" fill="none" stroke="#000000" pointerEvents="all"/>
                <rect x="120" y="96" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="135" y="110" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2Val}</text>
                </g>
                <rect x="180" y="87" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="96" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2Attr1}</text>
                </g>
                <rect x="180" y="101" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="110" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2Attr2}</text>
                </g>
                <rect x="180" y="114" width="46" height="10" fill="none" stroke="none" pointerEvents="all"/>
                <g transform="translate(-0.5 -0.5)">
                  <text x="203" y="123" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{ds2Attr3}</text>
                </g>
            </g>
            ) : null
          }
        </g>
        <g>
          <g>
            <rect x="310" y="0" width="70" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="345" y="14" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Local Variables</text>
            </g>
          </g>
          <g>
            <rect x="265" y="26" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="280" y="40" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var1 ? var1 : null}</text>
            </g>
            <rect x="307" y="26" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="322" y="40" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var2 ? var2 : null}</text>
            </g>
            <rect x="348" y="26" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="363" y="40" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var3 ? var3 : null}</text>
            </g>
            <rect x="390" y="26" width="30" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="405" y="40" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{var4 ? var4 : null}</text>
            </g>
          </g>
        </g>
        <g>
          <g>
            <rect x="310" y="66" width="70" height="20" fill="none" stroke="none" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
              <text x="345" y="80" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">Function Call</text>
            </g>
          </g>
          {fn
            ? (
              <g>
                <g>
                  <rect x="260" y="93" width="25" height="20" fill="none" stroke="none" pointerEvents="all"/>
                  <g transform="translate(-0.5 -0.5)">
                    <text x="273" y="107" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{fn}</text>
                  </g>
                </g>
                <g>
                  <rect x="290" y="86" width="130" height="34" fill="none" stroke="#000000" pointerEvents="all"/>
                  <g>
                    <rect x="304" y="87" width="46" height="13" fill="none" stroke="none" pointerEvents="all"/>
                    <g transform="translate(-0.5 -0.5)">
                      <text x="327" y="97" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{arg1Val ? `arg1: ${arg1Val}` : null}</text>
                    </g>
                    <rect x="360" y="87" width="46" height="13" fill="none" stroke="none" pointerEvents="all"/>
                    <g transform="translate(-0.5 -0.5)">
                      <text x="383" y="97" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{arg2Val ? `arg2: ${arg2Val}` : null}</text>
                    </g>
                    <rect x="304" y="104" width="46" height="13" fill="none" stroke="none" pointerEvents="all"/>
                    <g transform="translate(-0.5 -0.5)">
                      <text x="327" y="114" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{arg3Val ? `arg3: ${arg3Val}` : null}</text>
                    </g>
                    <rect x="360" y="104" width="46" height="13" fill="none" stroke="none" pointerEvents="all"/>
                    <g transform="translate(-0.5 -0.5)">
                      <text x="383" y="114" fill="#000000" fontFamily="Helvetica" fontSize="12px" textAnchor="middle">{arg4Val ? `arg4: ${arg4Val}` : null}</text>
                    </g>
                  </g>
                </g>
              </g>
            ) : null
          }
        </g>
      </g>
      {isCurrentStackFrame
        ? (
          <g>
            <path d="M 519.59 60.16 L 519.42 70.16 L 509.96 70 L 465.91 70 L 465.91 78.52 L 440.5 65 L 465.91 51.48 L 465.91 60 L 509.96 60 Q 510.04 60 510.13 60 Z" fill={currentStackFrameColor} stroke={black} strokeLinejoin="round" strokeMiterlimit="10" pointerEvents="all"/>
            <path d="M 465.91 70 L 465.91 78.52 L 440.5 65 L 465.91 51.48 L 465.91 60" fill={currentStackFrameColor} stroke={black} strokeLinejoin="flat" strokeMiterlimit="4" pointerEvents="all"/>
          </g>
        ) : null
      }
    </g>
  </svg>
);
