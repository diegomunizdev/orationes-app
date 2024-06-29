import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useNavigation } from '../../../../application/contexts/navigation/navigation.context';
import { useLayoutContext } from '../../../../application/contexts/layout/layout.context';
import Header from '../../../shared/Header/Header';
import AppearanceOptionOrganism from '../../../organisms/Settings/Appearance/AppearanceOption/AppearanceOptionOrganism';
import ModalThemeTemplate from './ModalTheme/ModalThemeTemplate';
import ModalFontSizeTemplate from './ModalTheme/ModalFontSizeTemplate';

export default function AppearanceTemplate(): JSX.Element {
  const [modalVisibleTheme, setModalVisibleTheme] = useState<boolean>(false);
  const [modalVisibleFontSize, setModalVisibleFontSize] =
    useState<boolean>(false);
  const navigation = useNavigation();
  const { handleTheme, handleFontSize } = useLayoutContext();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
  });

  const options = [
    {
      icon: 'theme-light-dark',
      title: 'Tema',
      subtitle: 'Escolha entre claro e escuro.',
      action: () => setModalVisibleTheme((prevState) => !prevState),
    },
    {
      icon: 'format-size',
      title: 'Tamanho da fonte',
      subtitle: 'Escolha o tamanho da fonte dos textos.',
      action: () => setModalVisibleFontSize((prevState) => !prevState),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ModalThemeTemplate
        visible={modalVisibleTheme}
        onClose={() => {
          setModalVisibleTheme((prevState) => !prevState);
        }}
        handleTheme={handleTheme}
      />

      <ModalFontSizeTemplate
        visible={modalVisibleFontSize}
        onClose={() => {
          setModalVisibleFontSize((prevState) => !prevState);
        }}
        handleFontSize={handleFontSize}
      />

      <Header title="Aparência" goBack={() => navigation?.goBack()} />

      <View>
        {options.map((item, index: number) => (
          <AppearanceOptionOrganism
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onPress={item.action}
          />
        ))}
      </View>
    </ScrollView>
  );
}
