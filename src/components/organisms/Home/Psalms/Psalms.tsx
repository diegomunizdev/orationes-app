import { ScrollView, StyleSheet } from 'react-native';
import { PsalmsProtocol } from '../../../../domain/protocols/DialyLiturgy';
import PsalmsContent from '../../../molecules/Home/PsalmsContent/PsalmsContent';

export type PsalmsProps = {
  psalms: PsalmsProtocol | undefined;
};

export default function Psalms({ psalms }: PsalmsProps): JSX.Element {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: 20, paddingBottom: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      testID="orationes-Psalms-ScrollView"
    >
      <PsalmsContent psalms={psalms} />
    </ScrollView>
  );
}
