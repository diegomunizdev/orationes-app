import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';
import { SecondReadingProtocol } from '../../../../../domain/protocols/DialyLiturgy';

export type SecondReadingContentProps = {
  secondReading: SecondReadingProtocol | undefined;
};

export default function SecondReadingContent({
  secondReading,
}: SecondReadingContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    text: { color: colors.text, textAlign: 'justify' },
    bold: { color: colors.text, fontWeight: 'bold' },
  });

  return (
    <View style={styles.container} testID="orationes-SecondReadingContent-View">
      <TextLiturgy style={styles.text}>
        {`Primeira leitura: ${secondReading?.referencia}`}
      </TextLiturgy>
      <TextLiturgy style={styles.bold}>{secondReading?.titulo}</TextLiturgy>
      <TextLiturgy style={styles.text}>{secondReading?.texto}</TextLiturgy>
      <TextLiturgy style={styles.text}>Palavra do Senhor.</TextLiturgy>
      <TextLiturgy style={styles.bold}>Graças a Deus</TextLiturgy>
    </View>
  );
}
