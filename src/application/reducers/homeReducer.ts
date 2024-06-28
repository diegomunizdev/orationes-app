export const INITIAL_HOME_REDUCER_STATE = {
  loading: false,
  data: undefined,
  error: undefined,
};

export enum HomeActions {
  INITIAL_STATE = 'INITIAL_STATE',
  REQUEST = 'REQUEST',
  RESPONSE = 'RESPONSE',
  ERROR = 'ERROR',
}

export function homeReducer(
  state = INITIAL_HOME_REDUCER_STATE,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case HomeActions.INITIAL_STATE:
      return state;

    case HomeActions.REQUEST:
      return {
        ...state,
        loading: true,
        data: undefined,
        error: undefined,
      };

    case HomeActions.RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: undefined,
      };

    case HomeActions.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: undefined,
      };

    default:
      return state;
  }
}
