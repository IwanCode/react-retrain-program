export function login (state, action) {
    switch (action.type) {
      case 'field':
        return {
          ...state,
          [action.field]: {
            value: action.payload,
            touched: true,
          },
        };
      default:
        return state;
    }
  }