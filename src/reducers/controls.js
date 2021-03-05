const initialState = {
  isPlaying: false,
  currentSpeed: 1000, // 1000 milliseconds/sequence
}

export const SET_TO_PLAY = 'SET_TO_PLAY';
export const SET_TO_PAUSE = 'SET_TO_PAUSE';
export const SET_PLAYBACK_SPEED = 'SET_PLAYBACK_SPEED';

export const setToPlay = () => ({
  type: SET_TO_PLAY,
  payload: {
    isPlaying: true,
  },
});

export const setToPause = () => ({
  type: SET_TO_PAUSE,
  payload: {
    isPlaying: false,
  },
});

export const setPlaybackSpeed = (newSpeed) => ({
  type: SET_PLAYBACK_SPEED,
  payload: {
    currentSpeed: newSpeed,
  },
});

export default function controlsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TO_PLAY:
    case SET_TO_PAUSE:
    case SET_PLAYBACK_SPEED:
      return { ...state, ...payload };
    default: return { ...state };
  }
}
