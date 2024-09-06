import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../shared/Header/Header';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function SaoMiguelView(): JSX.Element {
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
      <Header title="São Miguel Arcanjo" goBack={() => goBack()} />
      <Text style={styles.prayer}>
        {
          'São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe, Deus, instantemente o pedimos. E vós, príncipe das milícias celestes, pela virtude divina, precipitai no inferno a satánas e aos outros espíritos malignos que andam pelo mundo para perder as almas. Amém.'
        }
      </Text>
    </View>
  );
}
