import React from 'react';
import { connect } from 'react-redux';
import { StackFrameSelected } from '../../assets/svgs/memory';

const MemoryInsertionSort = ({ vars, dataStructures }) => (
  <div className="memory-model">
    {(vars && dataStructures)
      ? (
        <StackFrameSelected
          vars={{
            var1: `i = ${vars.i}`,
            var3: `j = ${vars.j}`,
            var5: `key = ${vars.key}`,
          }}
          dataStructures={{
            ds2: `A: [${dataStructures.A}]`,
          }}
        />
      )
      : null    
    }
  </div>
);

const mapStateToProps = state => ({
  vars: state.memory.vars,
  dataStructures: state.memory.dataStructures,
});

export default connect(mapStateToProps)(MemoryInsertionSort);