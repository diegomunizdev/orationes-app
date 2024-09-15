import { useTheme } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({ ...props }: ButtonProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
  });

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props.style]}
      testID="orationes-Button-TouchableOpacity"
    >
      <Text
        style={{
          color: colors.primary,
          textTransform: 'uppercase',
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
