import { IInitialLogin } from '../interfaces';

type ActionType = {
  type: string;
  payload: any;
  field: string
}

export function login (state: IInitialLogin, action: ActionType) {
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