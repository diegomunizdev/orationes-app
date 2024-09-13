import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ViewBase from '../../shared/ViewBase/ViewBase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EucharisticMiraclesTemplate(): JSX.Element {
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

  const prayersList = [
    {
      title: 'Lanciano',
      description: 'Itália, ano 700.',
      action: () => {},
    },
    {
      title: 'Orvieto ou Bolsena',
      description: 'Itália, ano 1263',
      action: () => {},
    },
    {
      title: 'Buenos Aires',
      description: 'Argentina, ano 1996',
      action: () => {},
    },
  ];

  return (
    <ViewBase>
      <Text style={{ color: colors.text }}>Milagres Eucarísticos</Text>
      {prayersList.map((pray, index) => (
        <TouchableOpacity
          onPress={() => {}}
          testID="orationes-SettingsOption-TouchableOpacity"
          key={index}
        >
          <View style={styles.content} testID="orationes-SettingsOption-View">
            <View style={styles.container} testID="orationes-SettingsItem-View">
              <Text style={styles.title} testID="orationes-SettingsItem-title">
                {pray.title}
              </Text>
              <Text
                style={styles.subtitle}
                testID="orationes-SettingsItem-subtitle"
              >
                {pray.description}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.text}
              size={22}
              testID="orationes-SettingsOption-chevron-right"
            />
          </View>
        </TouchableOpacity>
      ))}
    </ViewBase>
  );
}
