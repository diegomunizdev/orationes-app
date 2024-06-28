import { createContext, RefObject, useContext } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

export type LayoutContextProps = {
  theme: string;
  handleTheme: (theme: string) => void;
  drawer: RefObject<DrawerLayoutAndroid>;
  handleDrawer: () => void;

  fontSize: number;
  handleFontSize: (scale: 'mais' | 'menos' | undefined) => void;
};

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export const useLayoutContext = () => useContext(LayoutContext);
