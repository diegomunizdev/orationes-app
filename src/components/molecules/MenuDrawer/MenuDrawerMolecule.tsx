import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export type MenuDrawerProps = {
  title: string;
  icon: string;
};

export default function MenuDrawerMolecule({
  title,
  icon,
}: MenuDrawerProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    text: { color: colors.text },
  });

  return (
    <View style={styles.container} testID="orationes-MenuDrawer-View">
      <MaterialCommunityIcons
        name={icon as never}
        color={colors.text}
        size={20}
        testID="orationes-MenuDrawer-icon"
      />
      <Text style={styles.text} testID="orationes-MenuDrawer-title">
        {title}
      </Text>
    </View>
  );
}
