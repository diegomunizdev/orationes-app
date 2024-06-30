import { ScrollView, StyleSheet, View } from 'react-native';
import { SecondReadingProtocol } from '../../../../domain/protocols/DialyLiturgy';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';

export type SecondReadingProtocolProps = {
  secondReading: SecondReadingProtocol | undefined;
  fontSize: number;
};

export default function SecondReading({
  secondReading,
  fontSize,
}: SecondReadingProtocolProps): JSX.Element {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: 20, paddingBottom: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      testID="orationes-SecondReading-ScrollView"
    >
      <View style={{ gap: 15, flex: 1 }}>
        <TextLiturgy valueSize={fontSize} style={{ color: colors.text }}>
          {`Segunda leitura: ${secondReading?.referencia}`}
        </TextLiturgy>
        <TextLiturgy
          valueSize={fontSize}
          style={{ color: colors.text, fontWeight: 'bold' }}
        >
          {secondReading?.titulo}
        </TextLiturgy>
        <TextLiturgy valueSize={fontSize} style={{ color: colors.text }}>
          {secondReading?.texto}
        </TextLiturgy>
        <TextLiturgy valueSize={fontSize} style={{ color: colors.text }}>
          Palavra do Senhor.
        </TextLiturgy>
        <TextLiturgy
          valueSize={fontSize}
          style={{ color: colors.text, fontWeight: 'bold' }}
        >
          Graças a Deus
        </TextLiturgy>
      </View>
    </ScrollView>
  );
}
