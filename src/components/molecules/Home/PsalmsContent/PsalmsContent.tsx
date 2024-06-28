import { StyleSheet, View } from 'react-native';
import { PsalmsProtocol } from '../../../../domain/protocols/DialyLiturgy';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';

export type PsalmsContentProps = {
  psalms: PsalmsProtocol | undefined;
  fontSize: number;
};

export default function PsalmsContent({
  psalms,
  fontSize,
}: PsalmsContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    text: { color: colors.text, textAlign: 'justify' },
    chorus: { color: colors.text, fontWeight: 'bold' },
  });

  return (
    <View style={styles.container} testID="orationes-PsalmsContent-View">
      <TextLiturgy style={styles.text} valueSize={fontSize}>
        {`Salmo: ${psalms?.referencia}`}
      </TextLiturgy>
      <TextLiturgy style={styles.chorus} valueSize={fontSize}>
        {psalms?.refrao}
      </TextLiturgy>
      <TextLiturgy style={styles.text} valueSize={fontSize}>
        {psalms?.texto}
      </TextLiturgy>
    </View>
  );
}
