import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button';

export type ErrorProps = {
  title: string;
  subtitle?: string | undefined;
  actionTitle?: string | undefined;
  action?: () => void;
};

export default function Error({
  title,
  subtitle,
  actionTitle,
  action,
}: ErrorProps): JSX.Element {
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
      fontWeight: 'bold',
      color: colors.text,
    },
    subtitle: {
      color: colors.text,
      textAlign: 'center',
    },
    action: {
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container} testID="orationes-Error-View">
      <MaterialIcons
        name="error-outline"
        size={30}
        color={colors.primary}
        testID="orationes-Error-icon"
      />
      <View style={styles.texts}>
        <Text style={styles.title} testID="orationes-Error-title">
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} testID="orationes-Error-subtitle">
            {subtitle}
          </Text>
        ) : null}
      </View>
      {actionTitle ? (
        <View style={styles.action} testID="orationes-Error-actionTitle">
          <Button title={actionTitle.toUpperCase()} onPress={action} />
        </View>
      ) : null}
    </View>
  );
}
