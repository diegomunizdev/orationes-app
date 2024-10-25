import { ScrollView, StyleSheet } from 'react-native';
import GospelContent from '../../../molecules/Home/GospelContent/GospelContent';
import { GospelProtocol } from '../../../../../domain/protocols/DialyLiturgy';

export type GospelProps = {
  gospel: GospelProtocol | undefined;
};

export default function Gospel({ gospel }: GospelProps): JSX.Element {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: 20, paddingBottom: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      testID="orationes-Gospel-ScrollView"
    >
      <GospelContent gospel={gospel} />
    </ScrollView>
  );
}
