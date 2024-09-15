import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';
import { PsalmsProtocol } from '../../../../../domain/protocols/DialyLiturgy';

export type PsalmsContentProps = {
  psalms: PsalmsProtocol | undefined;
};

export default function PsalmsContent({
  psalms,
}: PsalmsContentProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { gap: 15, flex: 1 },
    text: { color: colors.text, textAlign: 'justify' },
    chorus: { color: colors.text, fontWeight: 'bold' },
  });

  return (
    <View style={styles.container} testID="orationes-PsalmsContent-View">
      <TextLiturgy style={styles.text}>
        {`Salmo: ${psalms?.referencia}`}
      </TextLiturgy>
      <TextLiturgy style={styles.chorus}>{psalms?.refrao}</TextLiturgy>
      <TextLiturgy style={styles.text}>{psalms?.texto}</TextLiturgy>
    </View>
  );
}
