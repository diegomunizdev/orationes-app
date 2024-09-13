import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { FontSizeType } from '../../../infra/theme/theme';

export type HeaderProps = {
  title: string;
  goBack: () => void;
};

export default function Header({ title, goBack }: HeaderProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 15,
      gap: 15,
      alignItems: 'center',
    },
    text: {
      color: colors.text,
      fontSize: FontSizeType.TEXT_18,
    },
  });

  return (
    <View style={styles.container} testID="orationes-Header-View">
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        onPress={goBack}
        color={colors.text}
        testID="orations-Header-goBack"
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
