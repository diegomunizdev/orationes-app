import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useTheme } from '@react-navigation/native';
import { FontSizeType } from '../../../../infra/theme/theme';

export type DateLiturgyProps = {
  date: string | undefined;
  liturgy: string | undefined;
};

export default function DateLiturgy({
  date,
  liturgy,
}: DateLiturgyProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    dateFormated: {
      fontWeight: 'bold',
      fontSize: FontSizeType.TEXT_24,
      color: colors.text,
    },
    liturgy: { color: colors.text },
  });

  const datefomated = date
    ? format(date, 'dd LLL. yyyy', {
        locale: ptBR,
      })
    : '-';

  return (
    <View style={styles.container} testID="orationes-DateLiturgy-View">
      <Text
        style={styles.dateFormated}
        testID="orationes-DateLiturgy-dateFormated"
      >
        {datefomated}
      </Text>
      <Text style={styles.liturgy} testID="orationes-DateLiturgy-liturgy">
        {liturgy}
      </Text>
    </View>
  );
}
