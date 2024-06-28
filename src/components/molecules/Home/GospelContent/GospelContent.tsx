import { StyleSheet, View } from 'react-native';

import { GospelProtocol } from '../../../../domain/protocols/DialyLiturgy';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';

export type GospelContentProps = {
  gospel: GospelProtocol | undefined;
  fontSize: number;
};

export default function GospelContent({
  gospel,
  fontSize,
}: GospelContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    reference: { color: colors.text },
    title: { color: colors.text, fontWeight: 'bold' },
    glory: { color: colors.text, fontWeight: 'bold' },
    text: { color: colors.text, textAlign: 'justify' },
  });

  return (
    <View style={styles.container} testID="orationes-GospelContent-View">
      <TextLiturgy
        style={styles.reference}
        valueSize={fontSize}
        testID="orationes-GospelContent-reference"
      >
        {`Evangelho: ${gospel?.referencia}`}
      </TextLiturgy>
      <TextLiturgy
        style={styles.title}
        valueSize={fontSize}
        testID="orationes-GospelContent-title"
      >
        {gospel?.titulo}
      </TextLiturgy>
      <TextLiturgy
        style={styles.glory}
        valueSize={fontSize}
        testID="orationes-GospelContent-glory"
      >
        Glória a vós, Senhor.
      </TextLiturgy>
      <TextLiturgy
        style={styles.text}
        valueSize={fontSize}
        testID="orationes-GospelContent-text"
      >
        {gospel?.texto}
      </TextLiturgy>
      <TextLiturgy
        style={styles.text}
        valueSize={fontSize}
        testID="orationes-GospelContent-wordSalvation"
      >
        Palavra da salvação.
      </TextLiturgy>
      <TextLiturgy
        style={styles.glory}
        valueSize={fontSize}
        testID="orationes-GospelContent-glory"
      >
        Glória a vós, Senhor.
      </TextLiturgy>
    </View>
  );
}
