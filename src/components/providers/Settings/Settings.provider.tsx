import { PropsWithChildren, useMemo } from 'react';

import { SettingsContext } from '../../../application/contexts/settings/settings.context';

export default function SettingsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value = useMemo(() => ({}), []);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
