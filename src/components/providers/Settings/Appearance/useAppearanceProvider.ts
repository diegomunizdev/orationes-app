import { useCallback, useMemo, useState } from 'react';
import { AppearanceContextProps } from '../../../../application/contexts/settings/appearance/appearance.context';

export function useAppearanceProvider(): AppearanceContextProps {
  const [modalVisibleTheme, setModalVisibleTheme] = useState<boolean>(false);
  const [modalVisibleFontSize, setModalVisibleFontSize] =
    useState<boolean>(false);

  const handleModalTheme = useCallback(() => {
    setModalVisibleTheme((prevState) => !prevState);
  }, []);

  const handleModalFontSize = useCallback(() => {
    setModalVisibleFontSize((prevState) => !prevState);
  }, []);

  const value = useMemo(
    () => ({
      handleModalFontSize,
      handleModalTheme,
      modalVisibleFontSize,
      modalVisibleTheme,
    }),
    [
      handleModalFontSize,
      handleModalTheme,
      modalVisibleFontSize,
      modalVisibleTheme,
    ]
  );

  return value;
}
