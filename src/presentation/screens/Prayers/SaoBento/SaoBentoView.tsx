import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';
import Header from '../../../components/shared/Header/Header';

export default function SaoBentoView(): JSX.Element {
  const navigation = useNavigationContext();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: 10,
    },
    prayer: {
      color: colors.text,
      paddingHorizontal: 20,
      textAlign: 'justify',
    },
  });

  return (
    <View style={styles.container}>
      <Header title="São Bento" goBack={() => navigation?.goBack()} />
      <Text style={styles.prayer}>
        {
          'A Cruz Sagrada seja minha Luz, não seja o dragão o meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces. Bebe tu mesmo o teu próprio veneno. Amém.'
        }
      </Text>
    </View>
  );
}
