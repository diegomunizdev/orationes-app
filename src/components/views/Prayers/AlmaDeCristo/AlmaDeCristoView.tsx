import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../shared/Header/Header';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function AlmaDeCristoView(): JSX.Element {
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
      <Header title="Alma de Cristo" goBack={() => goBack()} />
      <Text style={styles.prayer}>
        {
          'Alma de Cristo, santificai-me.\nCorpo de Cristo, salvai-me.\nSangue de Cristo, inebriai-me.\nÁgua do lado de Cristo, lavai-me.\nPaixão de Cristo, confortai-me.\nÓ bom Jesus, ouvi-me.\nDentro das Vossas Chagas, escondei-me.\nNão permitais que de Vós me separe.\nDo espírito maligno, defendei-me.\nNa hora da minha morte, chamai-me.\nE mandai-me ir para Vós, para que Vos louve com os Vossos Santos, por todos os séculos. Amém.'
        }
      </Text>
    </View>
  );
}
