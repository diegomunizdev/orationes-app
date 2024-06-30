import { createContext, useContext } from 'react';

export type AppearanceContextProps = {
  modalVisibleTheme: boolean;
  handleModalTheme: () => void;
  modalVisibleFontSize: boolean;
  handleModalFontSize: () => void;
};

export const AppearanceContext = createContext<AppearanceContextProps>(
  {} as unknown as AppearanceContextProps
);

export const useAppearanceContext = () => useContext(AppearanceContext);
