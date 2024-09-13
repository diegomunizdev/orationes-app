import { PropsWithChildren } from 'react';

import { AppearanceContext } from '../../../../application/contexts/settings/appearance/appearance.context';
import { useAppearanceProvider } from './useAppearanceProvider';

export default function AppearanceProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value = useAppearanceProvider();

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
}
