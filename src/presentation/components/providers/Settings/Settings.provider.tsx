import { PropsWithChildren } from 'react';

import { useSettingsProvider } from './useSettingsProvider';
import {
  SettingsContext,
  SettingsContextProps,
} from '../../../../application/contexts/settings/settings.context';

export default function SettingsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const value: SettingsContextProps = useSettingsProvider();

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
