import { ScrollView, StyleSheet } from 'react-native';
import PrimaryReadingContent from '../../../molecules/Home/PrimaryReadingContent/PrimaryReadingContent';
import { PrimaryReadingProtocol } from '../../../../../domain/protocols/DialyLiturgy';

export type PrimaryReadingProps = {
  primaryReading: PrimaryReadingProtocol | undefined;
};

export default function PrimaryReading({
  primaryReading,
}: PrimaryReadingProps): JSX.Element {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: 20, paddingBottom: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      testID="orationes-PrimaryReading-ScrollView"
    >
      <PrimaryReadingContent primaryReading={primaryReading} />
    </ScrollView>
  );
}
