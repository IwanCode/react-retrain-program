export function genres(state = { loading: true }, { type, payload }) {
  switch (type) {
    case 'FETCH_GENRES_START':
    case 'FETCH_GENRES_WITH_SAGAS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_GENRES_SUCCESS':
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
