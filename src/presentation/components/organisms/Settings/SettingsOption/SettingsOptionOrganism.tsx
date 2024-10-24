import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import SettingsItem from '../../../molecules/Settings/SettingsItem/SettingsItemMolecule';

export type SettingsOptionProps = {
  title: string;
  subtitle: string;
  icon: string;
  action: () => void;
};

export default function SettingsOptionOrganism({
  title,
  subtitle,
  icon,
  action,
}: SettingsOptionProps): JSX.Element {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    content: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return (
    <TouchableOpacity
      onPress={action}
      testID="orationes-SettingsOption-TouchableOpacity"
    >
      <View style={styles.content} testID="orationes-SettingsOption-View">
        <MaterialCommunityIcons
          name={icon as never}
          color={colors.text}
          size={24}
          testID="orationes-SettingsOption-icon"
        />
        <SettingsItem title={title} subtitle={subtitle} />
        <MaterialCommunityIcons
          name="chevron-right"
          color={colors.text}
          size={24}
          testID="orationes-SettingsOption-chevron-right"
        />
      </View>
    </TouchableOpacity>
  );
}
