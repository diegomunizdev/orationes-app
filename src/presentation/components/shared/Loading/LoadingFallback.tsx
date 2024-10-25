import { useTheme } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export type LoadingFallbackProps = {
  title?: string | undefined;
};

export default function LoadingFallback({
  title,
}: LoadingFallbackProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
    text: {
      color: colors.text,
    },
  });

  return (
    <View style={styles.container} testID="orationes-LoadingFallback-View">
      <ActivityIndicator
        color={colors.primary}
        testID="orationes-LoadingFallback-ActivityIndicator"
      />
      {title ? (
        <Text style={styles.text} testID="orationes-LoadingFallback-Text">
          {title}
        </Text>
      ) : null}
    </View>
  );
}
