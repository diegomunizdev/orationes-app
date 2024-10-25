import { useMemo } from 'react';
import { SettingsContextProps } from '../../../../application/contexts/settings/settings.context';

export function useSettingsProvider(): SettingsContextProps {
  const value = useMemo(() => ({}), []);
  return value;
}
