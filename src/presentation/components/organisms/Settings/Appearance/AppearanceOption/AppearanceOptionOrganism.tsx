import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SettingsItemMolecule from '../../../../molecules/Settings/SettingsItem/SettingsItemMolecule';

export type AppearanceOptionOrganismProps = {
  title: string;
  subtitle: string;
  icon: string;
  onPress: () => void;
};

export default function AppearanceOptionOrganism({
  title,
  subtitle,
  icon,
  onPress,
}: AppearanceOptionOrganismProps): JSX.Element {
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
      onPress={onPress}
      testID="orationes-AppearanceOptionOrganism-action"
    >
      <View
        style={styles.content}
        testID="orationes-AppearanceOptionOrganism-View"
      >
        <MaterialCommunityIcons
          name={icon as never}
          color={colors.text}
          size={20}
          testID="orationes-AppearanceOptionOrganism-icon"
        />
        <SettingsItemMolecule title={title} subtitle={subtitle} />
        <MaterialCommunityIcons
          name="dots-vertical"
          color={colors.text}
          size={20}
          testID="orationes-AppearanceOptionOrganism-dots"
        />
      </View>
    </TouchableOpacity>
  );
}
