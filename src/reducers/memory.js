const initialState = {
  vars: null,
  dataStructures: null,
  currentStackFrame: 0,
};

export const SET_VARS = 'SET_VARS';
export const SET_DATA_STRUCTURES = 'SET_DATA_STRUCTURES';
export const SET_STACK_FRAME = 'SET_STACK_FRAME';

export const setVars = (vars) => ({
  type: SET_VARS,
  payload: {
    vars,
  },
});

export const setDataStructures = (dataStructures) => ({
  type: SET_DATA_STRUCTURES,
  payload: {
    dataStructures,
  },
});

export const setStackFrame = (currentStackFrame) => ({
  type: SET_STACK_FRAME,
  payload: {
    currentStackFrame,
  },
});

export default function memoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VARS: 
    case SET_DATA_STRUCTURES:
    case SET_STACK_FRAME:
      return { ...state, ...payload };
    default: return { ...state };
  }
}