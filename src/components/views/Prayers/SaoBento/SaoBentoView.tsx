import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../shared/Header/Header';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function SaoBentoView(): JSX.Element {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: 10,
    },
    prayer: {
      color: colors.text,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Header title="São Bento" goBack={() => goBack()} />
      <Text style={styles.prayer}>
        {
          'A Cruz Sagrada seja minha Luz, não seja o dragão o meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces. Bebe tu mesmo o teu próprio veneno. Amém.'
        }
      </Text>
    </View>
  );
}
