import { PropsWithChildren } from 'react';

import {
  LayoutContext,
  LayoutContextProps,
} from '../../../application/contexts/layout/layout.context';
import { useLayoutProvider } from './useLayoutProvider';

export default function LayoutProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value: LayoutContextProps = useLayoutProvider();

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
