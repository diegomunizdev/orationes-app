import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export type HandleFontSizeOrganismProps = {
  handleFontSize: (scale: 'mais' | 'menos' | undefined) => void;
};

export default function HandleFontSizeMolecule({
  handleFontSize,
}: HandleFontSizeOrganismProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  });

  return (
    <View
      style={styles.container}
      testID="orationes-HandleFontSizeMolecule-View"
    >
      <TouchableOpacity
        onPress={() => {
          handleFontSize('mais');
        }}
        testID="orationes-HandleFontSizeMolecule-increase"
      >
        <MaterialCommunityIcons
          name="format-font-size-increase"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleFontSize(undefined);
        }}
        testID="orationes-HandleFontSizeMolecule-restore"
      >
        <MaterialCommunityIcons
          name="backup-restore"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleFontSize('menos');
        }}
        testID="orationes-HandleFontSizeMolecule-decrease"
      >
        <MaterialCommunityIcons
          name="format-font-size-decrease"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
}
