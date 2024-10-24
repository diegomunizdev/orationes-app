import { HomeContextProps } from '../../contexts/home/home.context';
import { dailyLiturgyMock } from '../dailyLiturgy/dailyLiturgy.mock';

export const mockHomeProvider: HomeContextProps = {
  data: dailyLiturgyMock,
  loading: false,
  error: undefined,
  buildDailyLiturgy: jest.fn(),
};
