interface Initial {
  count: number;
}

interface Action {
  type: string;
}

const initialValue: Initial = {
  count: 0,
};

function reducer(state: Initial, action: Action): Initial {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }

    default:
      return state;
  }
}

export { initialValue, reducer };
