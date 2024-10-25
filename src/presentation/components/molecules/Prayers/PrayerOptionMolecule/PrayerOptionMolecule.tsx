import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export type PrayerOptionOrganismProps = {
  title: string;
  description: string;
};

export default function PrayerOptionMolecule({
  title,
  description,
}: PrayerOptionOrganismProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    title: { color: colors.text, fontWeight: 'bold' },
    subtitle: { color: '#8F8F8F' },
  });

  return (
    <View style={styles.container} testID="orationes-PrayerOptionMolecule-View">
      <Text style={styles.title} testID="orationes-PrayerOptionMolecule-title">
        {title}
      </Text>
      <Text
        style={styles.subtitle}
        testID="orationes-PrayerOptionMolecule-description"
      >
        {description}
      </Text>
    </View>
  );
}
