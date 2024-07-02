import { createContext, RefObject, useContext } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

export type LayoutContextProps = {
  theme: string;
  handleTheme: (theme: string) => void;
  drawer: RefObject<DrawerLayoutAndroid>;
  handleDrawer: () => void;
};

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export const useLayoutContext = () => useContext(LayoutContext);
