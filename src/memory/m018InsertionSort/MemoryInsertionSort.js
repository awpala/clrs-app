import React from 'react';
import { StackFrame } from '../../assets/svgs/memory';

const MemoryInsertionSort = ({
  vars,
  dataStructures,
  currentStackFrame,
  currentStackFrameColor,
}) => (
  <div className="memory-model">
    {(vars && dataStructures)
      ? (
        <StackFrame
          vars={{
            var1: `i = ${vars.i}`,
            var3: `j = ${vars.j}`,
            var5: `key = ${vars.key}`,
          }}
          dataStructures={{
            ds2: `A: [${dataStructures.A}], A.length = ${dataStructures.A.length}`,
          }}
          isCurrentStackFrame={currentStackFrame === 1}
          currentStackFrameColor={currentStackFrameColor}
        />
      )
      : null    
    }
  </div>
);

export default MemoryInsertionSort;
