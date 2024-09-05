import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ViewBase from '../../shared/ViewBase/ViewBase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PrayersTemplate(): JSX.Element {
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
      title: 'Alma de Cristo',
      description: 'Santificai-me.',
      action: () => {},
    },
    {
      title: 'Santo Rosário',
      description: 'Mistérios da vida de Cristo.',
      action: () => {},
    },
    {
      title: 'Jesus Sacramentado',
      description:
        'Estais tão presente, poderoso e glorioso como estais no céu.',
      action: () => {},
    },
    {
      title: 'São Bento',
      description: 'A Cruz Sagrada seja minha luz.',
      action: () => {},
    },
  ];

  return (
    <ViewBase>
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
