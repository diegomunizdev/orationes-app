import {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LayoutContext } from '../../../application/contexts/layout/layout.context';

export default function LayoutProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<string>('light');
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const handleTheme = useCallback(
    async (theme: string) => {
      setTheme(theme);
      await AsyncStorage.setItem('theme', theme);
    },
    [setTheme]
  );

  const handleDrawer = useCallback(() => {
    drawer.current?.openDrawer();
  }, []);

  useLayoutEffect(() => {
    (async () => {
      try {
        const theme = await AsyncStorage.getItem('theme');

        if (theme !== null) {
          setTheme(() => theme);
        }
      } catch (e) {
        // saving error
      }
    })();
  }, []);

  const value = useMemo(
    () => ({
      drawer,
      theme,
      handleTheme,
      handleDrawer,
    }),
    [theme, handleTheme, handleDrawer]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
