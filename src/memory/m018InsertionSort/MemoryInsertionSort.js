import React from 'react';
import { StackFrame } from '../../assets/svgs/memory';

const MemoryInsertionSort = ({
  vars,
  dataStructures,
  currentStackFrame,
  currentStackFrameColor,
}) => (
  <div className="memory-model-insertion-sort">
    {(vars && dataStructures)
      ? (
        <div className="memory-model-insertion-sort-sf0">
          <StackFrame
            dataStructures={{
                ds1: {
                  ds1: '*A',
                  ds1Val: `[${dataStructures.A}]`,
                  ds1Attr2: `length = ${dataStructures.A.length}`
                },
                ds2: {}
              }
            }
            vars={{}}
            fn={{
              fn: 'I-S',
              arg1Val: '*A',
            }}
          />
        </div>
      ) : null
    }
    {(vars && dataStructures)
      ? (
        <div className="memory-model-insertion-sort-sf1">
          <StackFrame
            currentStackFrame={currentStackFrame}
            isCurrentStackFrame={currentStackFrame === 1}
            currentStackFrameColor={currentStackFrameColor}
            dataStructures={{
              ds1: {},
              ds2: {},
            }}
            vars={{
              var4: `i = ${vars.i}`,
              var5: `j = ${vars.j}`,
              var6: `key = ${vars.key}`,
            }}
            fn={{}}
          />
        </div>
      )
      : null    
    }
  </div>
);

export default MemoryInsertionSort;
