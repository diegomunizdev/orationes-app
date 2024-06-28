import { StyleSheet, View } from 'react-native';
import { SecondReadingProtocol } from '../../../../domain/protocols/DialyLiturgy';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';

export type SecondReadingContentProps = {
  secondReading: SecondReadingProtocol | undefined;
  fontSize: number;
};

export default function SecondReadingContent({
  secondReading,
  fontSize,
}: SecondReadingContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    text: { color: colors.text, textAlign: 'justify' },
    bold: { color: colors.text, fontWeight: 'bold' },
  });

  return (
    <View style={styles.container} testID="orationes-SecondReadingContent-View">
      <TextLiturgy style={styles.text} valueSize={fontSize}>
        {`Primeira leitura: ${secondReading?.referencia}`}
      </TextLiturgy>
      <TextLiturgy style={styles.bold} valueSize={fontSize}>
        {secondReading?.titulo}
      </TextLiturgy>
      <TextLiturgy style={styles.text} valueSize={fontSize}>
        {secondReading?.texto}
      </TextLiturgy>
      <TextLiturgy style={styles.text} valueSize={fontSize}>
        Palavra do Senhor.
      </TextLiturgy>
      <TextLiturgy style={styles.bold} valueSize={fontSize}>
        Graças a Deus
      </TextLiturgy>
    </View>
  );
}
