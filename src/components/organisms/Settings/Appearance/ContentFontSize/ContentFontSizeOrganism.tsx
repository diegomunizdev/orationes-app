import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TextLiturgy from '../../../../shared/TextLiturgy/TextLiturgy';
import FontSizeInfoMolecule from '../../../../molecules/Settings/FontSizeInfo/FontSizeInfoMolecule';
import HandleFontSizeMolecule from '../../../../molecules/Settings/HandleFontSize/HandleFontSizeMolecule';
import Button from '../../../../shared/Button/Button';

export type ContentFontSizeOrganismProps = {
  fontSize: number;
  handleFontSize: (scale: 'mais' | 'menos' | undefined) => void;
  onDefine: () => void;
};

export default function ContentFontSizeOrganism({
  fontSize,
  handleFontSize,
  onDefine,
}: ContentFontSizeOrganismProps): JSX.Element {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.card,
      padding: 20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      gap: 50,
    },
    chooseFontSize: {
      color: colors.text,
      fontWeight: 'bold',
    },
    btnDefine: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    exampleText: {
      textAlign: 'center',
    },
  });

  return (
    <View
      style={styles.container}
      testID="orationes-ContentFontSizeOrganism-View"
    >
      <Text style={styles.chooseFontSize}>Escolha o tamanho da fonte:</Text>

      <FontSizeInfoMolecule />

      <HandleFontSizeMolecule handleFontSize={handleFontSize} />

      <TextLiturgy valueSize={fontSize} style={styles.exampleText}>
        Este texto é um exemplo do tamanho da fonte desejada.
      </TextLiturgy>

      <View style={styles.btnDefine}>
        <Button title="definir" onPress={onDefine} />
      </View>
    </View>
  );
}
