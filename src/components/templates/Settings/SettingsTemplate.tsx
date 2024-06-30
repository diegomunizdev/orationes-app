import { ScrollView, StyleSheet } from 'react-native';

import Header from '../../shared/Header/Header';
import SettingsOptionOrganism from '../../organisms/Settings/SettingsOption/SettingsOptionOrganism';
import { useNavigation } from '../../../application/contexts/navigation/navigation.context';

export default function SettingsTemplate(): JSX.Element {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const options = [
    {
      icon: 'invert-colors',
      title: 'Aparência',
      subtitle: 'Altere o tema e o tamanho da fonte.',
      action: () => navigation?.navigate('Appearance' as never),
    },
    {
      icon: 'information-outline',
      title: 'Informações do aplicativo',
      subtitle: 'Versão, etc.',
      action: () => navigation?.navigate('InformationApp' as never),
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container}
      testID="orationes-SettingsTemplate-ScrollView"
    >
      <Header title="Configurações" goBack={() => navigation?.goBack()} />
      {options.map((item, index: number) => (
        <SettingsOptionOrganism
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          action={item.action}
        />
      ))}
    </ScrollView>
  );
}
