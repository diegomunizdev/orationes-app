import { StyleSheet, View } from 'react-native';
import { PrimaryReadingProtocol } from '../../../../domain/protocols/DialyLiturgy';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';

export type PrimaryReadingContentProps = {
  primaryReading: PrimaryReadingProtocol | undefined;
};

export default function PrimaryReadingContent({
  primaryReading,
}: PrimaryReadingContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    text: { color: colors.text, textAlign: 'justify' },
    bold: { color: colors.text, fontWeight: 'bold' },
  });

  return (
    <View
      style={styles.container}
      testID="orationes-PrimaryReadingContent-View"
    >
      <TextLiturgy style={styles.text}>
        {`Primeira leitura: ${primaryReading?.referencia}`}
      </TextLiturgy>
      <TextLiturgy style={styles.bold}>{primaryReading?.titulo}</TextLiturgy>
      <TextLiturgy style={styles.text}>{primaryReading?.texto}</TextLiturgy>
      <TextLiturgy style={styles.text}>Palavra do Senhor.</TextLiturgy>
      <TextLiturgy style={styles.bold}>Graças a Deus</TextLiturgy>
    </View>
  );
}
