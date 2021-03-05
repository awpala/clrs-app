import React, { useEffect } from 'react';

const InsertionSort = ({ setTotalSequences, currentSequence }) => {
  const totalSequencesInsertionSort = 53;

  useEffect(() => {
    setTotalSequences(totalSequencesInsertionSort);
  }, [setTotalSequences])

  return (
    <div className="pseudocode">
      <h2 className="pc-title">Insertion-Sort(A)</h2>
        <p
          className={`pc-level0${(
            currentSequence === 1
            || currentSequence === 9
            || currentSequence === 17
            || currentSequence === 22
            || currentSequence === 39
            || currentSequence === 53
            ) ? ' pc-current-sequence' : ''}`
          }
        >
          <span className="pc-keyword">for</span> <span className="pc-variable">j</span> = 2 <span className="pc-keyword">to</span> A.length
        </p>
          <p
            className={`pc-level1${(
              currentSequence === 2
              || currentSequence === 10
              || currentSequence === 18
              || currentSequence === 23
              || currentSequence === 40
              ) ? ' pc-current-sequence' : ''}`
            }
          >
            <span className="pc-variable">key</span> = A[j]
          </p>
          <p className="pc-level1">
            <span className="pc-comment">{'// Insert A[j] into the sorted sequence A[1..j - 1].'}</span>
          </p>
          <p
            className={`pc-level1${(
              currentSequence === 3
              || currentSequence === 11
              || currentSequence === 19
              || currentSequence === 24
              || currentSequence === 41
              ) ? ' pc-current-sequence' : ''}`
            }
          >
            <span className="pc-variable">i</span> = <span className="pc-variable">j</span> - 1
          </p>
          <p
            className={`pc-level1${(
              currentSequence === 4 || currentSequence === 7
              || currentSequence === 12 || currentSequence === 15
              || currentSequence === 20
              || currentSequence === 25 || currentSequence === 28 || currentSequence === 31 || currentSequence === 34 || currentSequence === 37
              || currentSequence === 42 || currentSequence === 45 || currentSequence === 48 || currentSequence === 51
              ) ? ' pc-current-sequence' : ''}`
            }
          >
            <span className="pc-keyword">while</span> <span className="pc-variable">i</span> {'>'} 0 <span className="pc-keyword">and</span> A[<span className="pc-variable">i</span>] {'>'} <span className="pc-variable">key</span>
          </p>
            <p
              className={`pc-level2${(
                currentSequence === 5
                || currentSequence === 13
                || currentSequence === 26 || currentSequence === 29 || currentSequence === 32 || currentSequence === 35
                || currentSequence === 43 || currentSequence === 46 || currentSequence === 49
                ) ? ' pc-current-sequence' : ''}`
              }
            >
              A[<span className="pc-variable">i</span> + 1] = A[<span className="pc-variable">i</span>]
            </p>
            <p
              className={`pc-level2${(
                currentSequence === 6
                || currentSequence === 14
                || currentSequence === 27 || currentSequence === 30 || currentSequence === 33 || currentSequence === 36
                || currentSequence === 44 || currentSequence === 47 || currentSequence === 50
                ) ? ' pc-current-sequence' : ''}`
              }
            >
              <span className="pc-variable">i</span>--
            </p>
          <p
            className={`pc-level1${(
              currentSequence === 8
              || currentSequence === 16
              || currentSequence === 21
              || currentSequence === 38
              || currentSequence === 52
              ) ? ' pc-current-sequence' : ''}`
            }
          >
            A[<span className="pc-variable">i</span> + 1] = <span className="pc-variable">key</span>
          </p>
    </div>
  );
};

export default InsertionSort;
