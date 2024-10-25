import { PropsWithChildren } from 'react';

import { useLayoutProvider } from './useLayoutProvider';
import {
  LayoutContext,
  LayoutContextProps,
} from '../../../../application/contexts/layout/layout.context';

export default function LayoutProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value: LayoutContextProps = useLayoutProvider();

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
