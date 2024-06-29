import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { FontSizeType } from '../../../../infra/theme/theme';

export default function FontSizeInfoMolecule(): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      padding: 10,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container} testID="orationes-FontSizeInfoMolecule-View">
      <MaterialCommunityIcons
        name="information-outline"
        size={20}
        color={colors.text}
        testID="orationes-FontSizeInfoMolecule-icon"
      />
      <Text
        style={{
          color: colors.text,
          flex: 1,
          fontSize: FontSizeType.TEXT_12,
        }}
        testID="orationes-FontSizeInfoMolecule-text"
      >
        Ao aumentar ou diminuir a fonte, apenas as leituras e orações que sofrem
        a mudança.
      </Text>
    </View>
  );
}
