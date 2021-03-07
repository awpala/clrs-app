import { NIL, POS_INF } from '../utilities/constants';

export const totalSequencesMergeSort = null;

export const MergeSortStates = {
  1: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: NIL,
    },
  },
  2: {
    // merge-sort-1'
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
  },
  3: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: NIL,
    },
  },
  4: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
  },
  5: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: NIL,
    },
  },
  6: {
    // merge-sort-1
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
  },
  7: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // merge-sort-1'''
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 1,
      q: NIL,
    },
  },
  8: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge-sort-2''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // merge-sort-1'''
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 2,
      r: 2,
      q: NIL,
    },
  },
  9: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: NIL,
      R: NIL,
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  10: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [NIL, NIL],
      R: [NIL, NIL],
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  11: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [NIL, NIL],
      R: [NIL, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  12: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, NIL],
      R: [41, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  13: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, NIL],
      R: [41, NIL],
      i: 2,
      j: 2,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  14: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 2,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  15: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  16: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  17: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  18: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  19: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 1,
      k: 1,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  20: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  21: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  22: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  23: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 2,
      k: 2,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  24: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-1'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 2,
      q: 1,
    },
    // FOR loop -- terminated
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [3, POS_INF],
      R: [41, POS_INF],
      i: 2,
      j: 2,
      k: 3,
      n1: 1,
      n2: 1,
      p: 1,
      q: 1,
      r: 2,
    },
  },
  25: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: NIL,
    },
  },
  26: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
  },
  27: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
   // merge-sort-1'''
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 3,
      q: NIL,
    },
  },
  28: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge-sort-1''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
   // merge-sort-1'''
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 4,
      r: 4,
      q: NIL,
    },
  },
  29: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: NIL,
      R: NIL,
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  30: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [NIL, NIL],
      R: [NIL, NIL],
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  31: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [NIL, NIL],
      R: [NIL, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  32: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, NIL],
      R: [26, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  33: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // concurrent FOR loops
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, NIL],
      R: [26, NIL],
      i: 2,
      j: 2,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  34: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 2,
      j: 2,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  35: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 1,
      k: NIL,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  36: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 1,
      k: 3,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  37: {
    // merge-sort
    sf1: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 52, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 1,
      k: 3,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  38: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 1,
      k: 3,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  39: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- ELSE
    sf4: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 2,
      k: 3,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  40: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop
    sf4: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 2,
      k: 4,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  41: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 26, 26, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 2,
      k: 4,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  42: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 1,
      j: 2,
      k: 4,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  43: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- IF
    sf4: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 2,
      j: 2,
      k: 4,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  44: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge-sort-2'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
   // merge''
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 3,
      r: 4,
      q: 3,
    },
    // FOR loop -- terminated
    sf4: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [52, POS_INF],
      R: [26, POS_INF],
      i: 2,
      j: 2,
      k: 5,
      n1: 1,
      n2: 1,
      p: 3,
      q: 3,
      r: 4,
    },
  },
  45: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: NIL,
      R: NIL,
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  46: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [NIL, NIL, NIL],
      R: [NIL, NIL, NIL],
      i: NIL,
      j: NIL,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  47: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // concurrent FOR loops
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [NIL, NIL, NIL],
      R: [NIL, NIL, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  48: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // concurrent FOR loops
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, NIL, NIL],
      R: [26, NIL, NIL],
      i: 1,
      j: 1,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  49: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // concurrent FOR loops
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, NIL, NIL],
      R: [26, NIL, NIL],
      i: 2,
      j: 2,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  50: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // concurrent FOR loops
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, NIL],
      R: [26, 52, NIL],
      i: 2,
      j: 2,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  51: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // concurrent FOR loops
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, NIL],
      R: [26, 52, NIL],
      i: 3,
      j: 3,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  52: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 3,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  53: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 1,
      j: 1,
      k: NIL,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  54: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  55: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  56: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 1,
      j: 1,
      k: 1,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  57: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 1,
      k: 1,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  58: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  59: {
    // merge-sort
    sf1: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 41, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  60: {
    // merge-sort
    sf1: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 1,
      k: 2,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  61: {
    // merge-sort
    sf1: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 2,
      k: 2,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  62: {
    // merge-sort
    sf1: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop
    sf3: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 2,
      k: 3,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  63: {
    // merge-sort
    sf1: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 26, 26, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 2,
      k: 3,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  64: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 2,
      j: 2,
      k: 3,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  65: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- IF
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 2,
      k: 3,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  66: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 2,
      k: 4,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  67: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 2,
      k: 4,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  68: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 2,
      k: 4,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  69: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- ELSE
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 3,
      k: 4,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  70: {
    // merge-sort
    sf1: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 8,
      q: 4,
    },
   // merge'
    sf2: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      p: 1,
      r: 4,
      q: 2,
    },
    // FOR loop -- terminated
    sf3: {
      A: [3, 26, 41, 52, 38, 57, 9, 49],
      L: [3, 41, POS_INF],
      R: [26, 52, POS_INF],
      i: 3,
      j: 3,
      k: 5,
      n1: 2,
      n2: 2,
      p: 1,
      q: 2,
      r: 4,
    },
  },
  
};
