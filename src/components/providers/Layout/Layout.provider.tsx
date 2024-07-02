import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DrawerLayoutAndroid,
  useWindowDimensions,
  Platform,
  PixelRatio,
} from 'react-native';

import { LayoutContext } from '../../../application/contexts/layout/layout.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const test = useWindowDimensions().fontScale;
  const p = Platform.OS;
  const a = PixelRatio.get();
  console.log({ test, p, a });

  const handleDrawer = useCallback(() => {
    drawer.current?.openDrawer();
  }, []);

  useEffect(() => {
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
