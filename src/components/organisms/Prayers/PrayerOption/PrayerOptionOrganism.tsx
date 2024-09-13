import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import PrayerOptionMolecule from '../../../molecules/Prayers/PrayerOptionMolecule/PrayerOptionMolecule';

export type PrayerOptionOrganismProps = {
  title: string;
  description: string;
  action: () => void;
};

export default function PrayerOptionOrganism({
  title,
  description,
  action,
}: PrayerOptionOrganismProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { marginHorizontal: 8, flex: 1 },
    content: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: { color: colors.text, fontWeight: 'bold' },
    subtitle: { color: '#8F8F8F' },
  });

  return (
    <TouchableOpacity
      onPress={() => action()}
      testID="orationes-PrayerOptionOrganism-TouchableOpacity"
    >
      <View style={styles.content} testID="orationes-PrayerOptionOrganism-View">
        <PrayerOptionMolecule title={title} description={description} />
        <MaterialCommunityIcons
          name="chevron-right"
          color={colors.text}
          size={22}
          testID="orationes-PrayerOptionOrganism-chevron-right"
        />
      </View>
    </TouchableOpacity>
  );
}
