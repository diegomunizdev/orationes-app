import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { AppearanceContext } from '../../../../application/contexts/settings/appearance/appearance.context';

export default function AppearanceProvider({
  children,
}: PropsWithChildren): JSX.Element {
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

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
}
