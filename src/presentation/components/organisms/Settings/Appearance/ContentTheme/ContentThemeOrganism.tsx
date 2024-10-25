import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HandleActionsThemeMolecule from '../../../../molecules/Settings/HandleActionsTheme/HandleActionsThemeMolecule';

export type ContentThemeOrganismProps = {
  handleTheme: (theme: string) => void;
  onClose: () => void;
};

export default function ContentThemeOrganism({
  handleTheme,
  onClose,
}: ContentThemeOrganismProps): JSX.Element {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.card,
      padding: 20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingBottom: 50,
      gap: 30,
    },
    chooseTheme: {
      color: colors.text,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container} testID="orationes-ContentThemeOrganism-View">
      <Text style={styles.chooseTheme}>Escolha o tema:</Text>
      <HandleActionsThemeMolecule handleTheme={handleTheme} onClose={onClose} />
    </View>
  );
}
