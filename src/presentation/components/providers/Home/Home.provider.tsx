import { PropsWithChildren } from 'react';

import { useHomeProvider } from './useHomeProvider';
import {
  HomeContext,
  HomeContextProps,
} from '../../../../application/contexts/home/home.context';

export default function HomeProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value: HomeContextProps = useHomeProvider();

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
