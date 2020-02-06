import { initialSearchState } from '../constants/initialSearch';

export function search(state = initialSearchState, { type, payload }) {
  switch (type) {
    case 'RUN_ACTION':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
