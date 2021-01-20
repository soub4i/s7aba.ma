export function episode(state, action) {
    switch (action.type) {
      case "PLAY":
        return { ...state, currentEpisode: action.payload };
      default:
        return state;
    }
  }