import { StyleSheet, View } from 'react-native';

import { DailyLiturgyProtocol } from '../../../../domain/protocols/DialyLiturgy';
import DateLiturgy from '../../../molecules/Home/DateLiturgy/DateLiturgy';
import LiturgicalColorDay from '../../../molecules/Home/LiturgicalColorDay/LiturgicalColorDay';

export type DailyLiturgyHeaderProps = {
  dailyLiturgy: DailyLiturgyProtocol | undefined;
};

export default function DailyLiturgyHeader({
  dailyLiturgy,
}: DailyLiturgyHeaderProps) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 10,
      paddingBottom: 15,
    },
  });

  return (
    <View style={styles.container} testID="orationes-DailyLiturgyHeader-View">
      <DateLiturgy date={dailyLiturgy?.data} liturgy={dailyLiturgy?.liturgia} />
      <LiturgicalColorDay color={dailyLiturgy?.cor} />
    </View>
  );
}
