import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FontSizeType } from '../../../infra/theme/theme';

export type HomeHeaderMoleculeProps = {
  drawerNavigation: () => void;
  navigateToSettings: () => void;
};

export default function HomeHeaderMolecule({
  drawerNavigation,
  navigateToSettings,
}: HomeHeaderMoleculeProps): JSX.Element {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
    },
    title: { color: colors.text, fontSize: FontSizeType.TEXT_22 },
  });

  return (
    <View style={styles.container} testID="orationes-HomeHeaderMolecule-View">
      <MaterialCommunityIcons
        name="menu"
        size={24}
        color={colors.text}
        onPress={drawerNavigation}
        testID="orationes-HomeHeaderMolecule-drawerNavigation"
      />
      <Text style={styles.title}>{t('app')}</Text>
      <MaterialCommunityIcons
        name="cog-outline"
        size={24}
        color={colors.text}
        onPress={navigateToSettings}
        testID="orationes-HomeHeaderMolecule-navigateToSettings"
      />
    </View>
  );
}
