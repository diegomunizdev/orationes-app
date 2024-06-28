import { useTheme } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export type LoadingProps = {
  title?: string | undefined;
};

export default function Loading({ title }: LoadingProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
    text: {
      color: colors.text,
    },
  });

  return (
    <View style={styles.container} testID="loading-app">
      <ActivityIndicator
        color={colors.primary}
        testID="loading-app-ActivityIndicatior"
      />
      {title ? (
        <Text style={styles.text} testID="loading-app-title">
          {title}
        </Text>
      ) : null}
    </View>
  );
}
