import { useTheme } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';

export type TextLiturgyProps = TextProps & PropsWithChildren;

export default function TextLiturgy({
  children,
  ...props
}: TextLiturgyProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <Text
      {...props}
      style={[{ color: colors.text }, props.style]}
      testID="orationes-TextLiturgy-Text"
    >
      {children}
    </Text>
  );
}
