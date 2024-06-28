import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { HomeContext } from '../../../application/contexts/home/home.context';
import { apiService } from '../../../infra/services/service';
import {
  HomeActions,
  homeReducer,
  INITIAL_HOME_REDUCER_STATE,
} from '../../../application/reducers/homeReducer';
import { DailyLiturgyModel } from '../../../application/models/DailyLiturgyModel';

export default function HomeProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [homeState, homeDispatch] = useReducer(
    homeReducer,
    INITIAL_HOME_REDUCER_STATE
  );

  const handleDailyLiturgy = useCallback(async () => {
    homeDispatch({ type: HomeActions.REQUEST });

    await apiService()
      .then((result) => {
        homeDispatch({
          type: HomeActions.RESPONSE,
          payload: new DailyLiturgyModel(result),
        });
      })
      .catch((error) => {
        homeDispatch({ type: HomeActions.ERROR, payload: error });
      });
  }, []);

  useEffect(() => {
    (async () => await handleDailyLiturgy())();
  }, [handleDailyLiturgy]);

  const value = useMemo(
    () => ({ ...homeState, handleDailyLiturgy }),
    [handleDailyLiturgy, homeState]
  );

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
