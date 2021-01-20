export function player(state, action) {
    switch (action.type) {
      case "LOAD":
        return { ...state, isPlayerLoaded: action.payload };
      default:
        return state;
    }
  }