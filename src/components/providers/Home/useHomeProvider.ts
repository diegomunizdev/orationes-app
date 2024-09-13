import { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  HomeActions,
  homeReducer,
  INITIAL_HOME_REDUCER_STATE,
} from '../../../application/reducers/homeReducer';
import { apiService } from '../../../infra/services/service';
import { DailyLiturgyModel } from '../../../application/models/DailyLiturgyModel';
import { HomeContextProps } from '../../../application/contexts/home/home.context';

export function useHomeProvider(): HomeContextProps {
  const [homeState, homeDispatch] = useReducer(
    homeReducer,
    INITIAL_HOME_REDUCER_STATE
  );

  const buildDailyLiturgy = useCallback(async () => {
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
    (async () => await buildDailyLiturgy())();
  }, [buildDailyLiturgy]);

  const value = useMemo(
    () => ({ ...homeState, buildDailyLiturgy }),
    [buildDailyLiturgy, homeState]
  );

  return value;
}
