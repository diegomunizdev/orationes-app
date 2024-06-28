import { ScrollView, StyleSheet } from 'react-native';
import { PrimaryReadingProtocol } from '../../../../domain/protocols/DialyLiturgy';
import PrimaryReadingContent from '../../../molecules/Home/PrimaryReadingContent/PrimaryReadingContent';

export type PrimaryReadingProps = {
  primaryReading: PrimaryReadingProtocol | undefined;
  fontSize: number;
};

export default function PrimaryReading({
  primaryReading,
  fontSize,
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
      <PrimaryReadingContent
        primaryReading={primaryReading}
        fontSize={fontSize}
      />
    </ScrollView>
  );
}
