import { black, red, green, blue, purple, orange } from '../utilities/constants';

const initialState = {
  vars: null,
  dataStructures: null,
  currentStackFrame: 0,
  currentStackFrameColor: null,
};

export const SET_VARS = 'SET_VARS';
export const SET_DATA_STRUCTURES = 'SET_DATA_STRUCTURES';
export const SET_STACK_FRAME = 'SET_STACK_FRAME';
export const SET_STACK_FRAME_COLOR = 'SET_STACK_FRAME_COLOR';

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

export const setStackFrameColor = (currentStackFrame) => {
  let currentStackFrameColor;

  switch (currentStackFrame) {
    case 1:
      currentStackFrameColor = red;
      break;
    case 2:
      currentStackFrameColor = green;
      break;
    case 3:
      currentStackFrameColor = blue;
      break;
    case 4:
      currentStackFrameColor = purple;
      break;
    case 5:
      currentStackFrameColor = orange;
      break;
    default:
      currentStackFrameColor = black;
  }

  return ({
    type: SET_STACK_FRAME_COLOR,
    payload: {
      currentStackFrameColor,
    }
  });
}

export default function memoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VARS: 
    case SET_DATA_STRUCTURES:
    case SET_STACK_FRAME:
    case SET_STACK_FRAME_COLOR:
      return { ...state, ...payload };
    default: return { ...state };
  }
}