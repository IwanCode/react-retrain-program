import { initialSearchState } from '../constants/initialSearch';

export function search(state = initialSearchState, { type, payload }: {
  type: string;
  payload: any;
}) {
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
