import { createContext, useContext } from 'react';
import { DailyLiturgyProtocol } from '../../../domain/protocols/DialyLiturgy';

export type HomeContextProps = {
  data: DailyLiturgyProtocol | undefined;
  loading: boolean;
  error: any;
  handleDailyLiturgy: () => Promise<void>;
};

export const HomeContext = createContext<HomeContextProps>(
  {} as unknown as HomeContextProps
);

export const useHomeContext = () => useContext(HomeContext);
