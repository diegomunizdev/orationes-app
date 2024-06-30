import { createContext, useContext } from 'react';

export type SettingsContextProps = {};

export const SettingsContext = createContext<SettingsContextProps>(
  {} as unknown as SettingsContextProps
);

export const useSettingsContext = () => useContext(SettingsContext);
