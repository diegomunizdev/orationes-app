import { ScrollView, StyleSheet } from 'react-native';
import { GospelProtocol } from '../../../../domain/protocols/DialyLiturgy';
import GospelContent from '../../../molecules/Home/GospelContent/GospelContent';

export type GospelProps = {
  gospel: GospelProtocol | undefined;
  fontSize: number;
};

export default function Gospel({ gospel, fontSize }: GospelProps): JSX.Element {
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
      <GospelContent gospel={gospel} fontSize={fontSize} />
    </ScrollView>
  );
}
