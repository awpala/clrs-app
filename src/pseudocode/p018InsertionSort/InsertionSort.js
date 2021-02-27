import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTotalSequences } from '../../reducers/pseudocode';

const InsertionSort = ({ setTotalSequences, currentSequence }) => {
  const totalSequencesInsertionSort = 39;

  useEffect(() => {
    setTotalSequences(totalSequencesInsertionSort);
  }, [])

  return (
    <div className="pseudocode">
      <h1 className="pc-title">Insertion-Sort(A)</h1>
        <p className={`pc-level0${(currentSequence === 1 || currentSequence === 9) ? ' pc-current-sequence' : ''}`}>
          <span className="pc-keyword">for</span> <span className="pc-variable">j</span> = 2 <span className="pc-keyword">to</span> A.length
        </p>
          <p className={`pc-level1${(currentSequence === 2) ? ' pc-current-sequence' : ''}`}>
            <span className="pc-variable">key</span> = A[j]
          </p>
          <p className="pc-level1">
            <span className="pc-comment">{'// Insert A[j] into the sorted sequence A[1..j - 1].'}</span>
          </p>
          <p className={`pc-level1${(currentSequence === 3) ? ' pc-current-sequence' : ''}`}>
            <span className="pc-variable">i</span> = <span className="pc-variable">j</span> - 1
          </p>
          <p className={`pc-level1${(currentSequence === 4 || currentSequence === 7) ? ' pc-current-sequence' : ''}`}>
            <span className="pc-keyword">while</span> <span className="pc-variable">i</span> {'>'} 0 <span className="pc-keyword">and</span> A[<span className="pc-variable">i</span>] {'>'} <span className="pc-variable">key</span>
          </p>
            <p className={`pc-level2${(currentSequence === 5) ? ' pc-current-sequence' : ''}`}>
              A[<span className="pc-variable">i</span> + 1] = A[<span className="pc-variable">i</span>]
            </p>
            <p className={`pc-level2${(currentSequence === 6) ? ' pc-current-sequence' : ''}`}>
              <span className="pc-variable">i</span>--
            </p>
            <p className={`pc-level1${(currentSequence === 8) ? ' pc-current-sequence' : ''}`}>
            A[<span className="pc-variable">i</span> + 1] = <span className="pc-variable">key</span>
          </p>
    </div>
  )
};

const mapStateToProps = state => ({
  currentSequence: state.pseudocode.currentSequence,
});

const mapDispatchToProps = dispatch => ({
  setTotalSequences: (totalSequences) => dispatch(setTotalSequences(totalSequences)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertionSort)