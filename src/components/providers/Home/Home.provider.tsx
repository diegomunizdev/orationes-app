import { PropsWithChildren } from 'react';

import {
  HomeContext,
  HomeContextProps,
} from '../../../application/contexts/home/home.context';
import { useHomeProvider } from './useHomeProvider';

export default function HomeProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value: HomeContextProps = useHomeProvider();

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
