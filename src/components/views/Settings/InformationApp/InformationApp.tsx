import { StyleSheet, Text, View } from 'react-native';
import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';
import PACKAGE_JSON from '../../../../../package.json';
import { useTheme } from '@react-navigation/native';
import Header from '../../../shared/Header/Header';

export default function InformationAppView(): JSX.Element {
  const navigation = useNavigationContext();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Header
        title="Informações do aplicativo"
        goBack={() => navigation?.goBack()}
      />
      <View style={styles.content}>
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>
          {PACKAGE_JSON.version}
        </Text>
        <Text style={{ color: '#8F8F8F', fontWeight: '300' }}>
          Versão atual
        </Text>
      </View>
    </View>
  );
}
