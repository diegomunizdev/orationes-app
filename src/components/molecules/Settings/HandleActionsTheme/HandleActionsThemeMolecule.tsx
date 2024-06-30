import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type HandleActionsThemeMoleculeProps = {
  handleTheme: (theme: string) => void;
  onClose: () => void;
};

export default function HandleActionsThemeMolecule({
  handleTheme,
  onClose,
}: HandleActionsThemeMoleculeProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: 20,
    },
    textColor: {
      color: colors.text,
    },
  });

  return (
    <View
      style={styles.container}
      testID="orationes-HandleActionsThemeMolecule-View"
    >
      <TouchableOpacity
        onPress={() => {
          handleTheme('light');
          onClose();
        }}
        testID="orationes-HandleActionsThemeMolecule-light"
      >
        <Text style={styles.textColor}>Claro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleTheme('dark');
          onClose();
        }}
        testID="orationes-HandleActionsThemeMolecule-dark"
      >
        <Text style={styles.textColor}>Escuro</Text>
      </TouchableOpacity>
    </View>
  );
}
