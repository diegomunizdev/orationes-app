import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LayoutContextProps } from '../../../application/contexts/layout/layout.context';

export function useLayoutProvider(): LayoutContextProps {
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

  const buildTheme = useCallback(async () => {
    try {
      const theme = await AsyncStorage.getItem('theme');

      if (theme !== null) {
        setTheme(() => theme);
      }
    } catch (e) {
      // saving error
    }
  }, []);

  useLayoutEffect(() => {
    buildTheme();
  }, [buildTheme]);

  const value = useMemo(
    () => ({
      drawer,
      theme,
      handleTheme,
      handleDrawer,
    }),
    [theme, handleTheme, handleDrawer]
  );

  return value;
}
