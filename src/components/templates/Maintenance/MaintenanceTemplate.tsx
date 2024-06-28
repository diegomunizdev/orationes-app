import { StyleSheet, View } from 'react-native';
import Maintenance from '../../shared/Maintenance/Maintenance';

export default function MaintenanceTemplate(): JSX.Element {
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });

  return (
    <View style={styles.container} testID="orationes-MaintenanceTemplate-View">
      <Maintenance
        title="Em manutenção"
        subtitle="Estamos trabalhando para deixar o aplicativo cada vez melhor para você."
      />
    </View>
  );
}
