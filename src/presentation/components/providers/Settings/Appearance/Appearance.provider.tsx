import { PropsWithChildren } from 'react';

import { useAppearanceProvider } from './useAppearanceProvider';
import { AppearanceContext } from '../../../../../application/contexts/settings/appearance/appearance.context';

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
