import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';
import Header from '../../../components/shared/Header/Header';

export default function JesusSacramentadoView(): JSX.Element {
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
      <Header title="Jesus Sacramentado" goBack={() => navigation?.goBack()} />
      <Text style={styles.prayer}>
        {
          'Meu Jesus Cristo, Filho de Deus vivo, eis-me aqui em companhia da Santíssima Virgem, dos Anjos, dos Santos do Céu e dos justos da Terra, para visitar-Vos e adorar-Vos nesta Hóstia Consagrada. Creio firmemente que estais tão presente, poderoso e glorioso como estais no Céu; e pelos Vossos méritos, espero alcançar a glória eterna, seguindo em tudo Vossas divinas inspirações; e em agradecimento de Vosso divino amor, quero amar-Vos com todo o meu coração e minha alma, potências e sentidos.\n\nSuplico-Vos, Salvador de minha alma, pelo Sangue precioso que derramastes em Vossa circuncisão e em Vossa Santíssima Paixão, que exerciteis comigo este ofício de Salvador, dando-me, pela intercessão de Vossa Santíssima Mãe, os dons da oração juntamente com a perseverança, para que, quando deixar esta vida, me guieis à glória eterna que gozais no Céu. Amém.'
        }
      </Text>
    </View>
  );
}
