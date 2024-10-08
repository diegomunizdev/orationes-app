import { PropsWithChildren } from 'react';

import {
  SettingsContext,
  SettingsContextProps,
} from '../../../application/contexts/settings/settings.context';
import { useSettingsProvider } from './useSettingsProvider';

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
