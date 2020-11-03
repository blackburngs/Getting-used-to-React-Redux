const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  if (action.type === "INCREASE")
    return {
      count: state.count + 1,
    };
  else if (action.type === "DECREASE" && state.count > 0)
    return {
      count: state.count - 1,
    };
  else if (action.type === "RESET")
    return {
      count: 0,
    };
  else {
    return state;
  }
};

export default reducer;
