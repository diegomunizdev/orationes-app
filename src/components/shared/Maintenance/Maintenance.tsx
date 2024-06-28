import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { FontSizeType } from '../../../infra/theme/theme';

export type MaintenanceProps = {
  title: string;
  subtitle: string;
};

export default function Maintenance({
  title,
  subtitle,
}: MaintenanceProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    texts: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 250,
      gap: 5,
    },
    title: {
      fontSize: FontSizeType.TEXT_20,
      fontWeight: 'bold',
      color: colors.text,
    },
    subtitle: {
      color: colors.text,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container} testID="orationes-Maintenance-View">
      <MaterialCommunityIcons
        name="cellphone-cog"
        size={50}
        color={colors.primary}
        testID="orationes-Maintenance-icon"
      />
      <View style={styles.texts}>
        <Text style={styles.title} testID="orationes-Maintenance-title">
          {title}
        </Text>
        <Text style={styles.subtitle} testID="orationes-Maintenance-subtitle">
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
