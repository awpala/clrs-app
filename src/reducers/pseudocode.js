const initialState = {
  currentSequence: 1,
  totalSequences: null,
}

export const SET_TOTAL_SEQUENCES = 'SET_TOTAL_SEQUENCES';
export const SET_CURRENT_SEQUENCE = 'SET_CURRENT_SEQUENCE';
export const INCREMENT_CURRENT_SEQUENCE = 'INCREMENT_CURRENT_SEQUENCE';
export const DECREMENT_CURRENT_SEQUENCE = 'DECREMENT_CURRENT_SEQUENCE';

export const setTotalSequences = (totalSequences) => ({
  type: SET_TOTAL_SEQUENCES,
  payload: {
    totalSequences,
  },
});

export const setCurrentSequence = (currentSequence) => ({
  type: SET_CURRENT_SEQUENCE,
  payload: {
    currentSequence,
  }
});

export const incrementCurrentSequence = (currentSequence, totalSequences) => {
  const action = {
    type: INCREMENT_CURRENT_SEQUENCE,
  }

  action.payload = (currentSequence < totalSequences)
  ? { 
    currentSequence: currentSequence + 1, 
  }
  : {
    currentSequence,
  };

  return action;
}

export const decrementCurrentSequence = (currentSequence) => {
  const action = {
    type: DECREMENT_CURRENT_SEQUENCE,
  }

  action.payload = (currentSequence > 1)
  ? { 
    currentSequence: currentSequence - 1, 
  }
  : {
    currentSequence,
  };

  return action;
}

export default function pseudocodeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOTAL_SEQUENCES: return { ...state, ...payload };
    case SET_CURRENT_SEQUENCE: return { ...state, ...payload };
    case INCREMENT_CURRENT_SEQUENCE: return { ...state, ...payload };
    case DECREMENT_CURRENT_SEQUENCE: return { ...state, ...payload };
    default: return { ...state };
  }
}
