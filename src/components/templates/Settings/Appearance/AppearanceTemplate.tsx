import { ScrollView, StyleSheet, View } from 'react-native';

import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';
import { useLayoutContext } from '../../../../application/contexts/layout/layout.context';
import Header from '../../../shared/Header/Header';
import AppearanceOptionOrganism from '../../../organisms/Settings/Appearance/AppearanceOption/AppearanceOptionOrganism';
import ModalThemeTemplate from './ModalTheme/ModalThemeTemplate';
import { useAppearanceContext } from '../../../../application/contexts/settings/appearance/appearance.context';

export default function AppearanceTemplate(): JSX.Element {
  const navigation = useNavigationContext();
  const { modalVisibleTheme, handleModalTheme } = useAppearanceContext();
  const { handleTheme } = useLayoutContext();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
  });

  const options = [
    {
      icon: 'theme-light-dark',
      title: 'Tema',
      subtitle: 'Escolha entre claro e escuro.',
      action: () => handleModalTheme(),
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      testID="orationes-AppearanceTemplate-ScrollView"
    >
      <ModalThemeTemplate
        visible={modalVisibleTheme}
        onClose={() => {
          handleModalTheme();
        }}
        handleTheme={handleTheme}
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
