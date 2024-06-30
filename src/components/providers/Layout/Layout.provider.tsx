import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { LayoutContext } from '../../../application/contexts/layout/layout.context';
import { DrawerLayoutAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontSizeType } from '../../../infra/theme/theme';

export default function LayoutProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<string>('light');
  const [fontSize, setFontSize] = useState<number>(FontSizeType.TEXT_14);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const handleTheme = useCallback(
    async (theme: string) => {
      setTheme(theme);
      await AsyncStorage.setItem('theme', theme);
    },
    [setTheme]
  );

  const handleFontSize = useCallback(
    async (scale: 'mais' | 'menos' | undefined) => {
      try {
        if (scale === 'mais' && fontSize < FontSizeType.TEXT_24) {
          setFontSize((prevState) => prevState * 1.2);
        } else if (scale === 'menos' && fontSize > FontSizeType.TEXT_12) {
          setFontSize((prevState) => prevState * 0.8);
        } else if (scale === undefined) {
          setFontSize(() => FontSizeType.TEXT_14);
        }

        const value = JSON.stringify(fontSize);
        await AsyncStorage.setItem('fontSize', value);
      } catch (e) {
        // saving error
      }
    },
    [fontSize]
  );

  const handleDrawer = useCallback(() => {
    drawer.current?.openDrawer();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const fontSize = await AsyncStorage.getItem('fontSize');
        const theme = await AsyncStorage.getItem('theme');
        if (fontSize !== null) {
          const result = parseInt(fontSize);
          setFontSize(() => result);
        }
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
      handleFontSize,
      fontSize,
    }),
    [theme, handleTheme, handleDrawer, handleFontSize, fontSize]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
