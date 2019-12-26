export function movies(state = { loading: true }, { type, payload }) {
  switch (type) {
    case 'FETCH_MOVIES_START':
    case 'FETCH_MOVIES_WITH_SAGAS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
