import { RefObject } from 'react';
import {
  DrawerLayoutAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Theme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import MenuDrawerMolecule from '../../molecules/MenuDrawer/MenuDrawerMolecule';
import { FontSizeType } from '../../../infra/theme/theme';

export type DrawerNavigationOrganismProps = {
  drawer: RefObject<DrawerLayoutAndroid>;
  navigation: any;
  theme: Theme;
};

export default function DrawerNavigationOrganism({
  drawer,
  navigation,
  theme,
}: DrawerNavigationOrganismProps): JSX.Element {
  const { t } = useTranslation();
  const { colors } = theme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight && StatusBar.currentHeight * 3,
      backgroundColor: colors.background,
      paddingHorizontal: 20,
      gap: 30,
    },
    title: {
      color: colors.text,
      fontSize: FontSizeType.TEXT_16,
    },
  });

  const options = [
    {
      icon: 'book-open-page-variant-outline',
      title: 'Liturgia diária',
      action: () => {
        navigation?.navigate('Home');
        drawer.current?.closeDrawer();
      },
    },
    {
      icon: 'hands-pray',
      title: 'Orações',
      action: () => {
        navigation?.navigate('Prayers');
        drawer.current?.closeDrawer();
      },
    },
    {
      icon: 'cross-outline',
      title: 'Milagres Eucarísticos',
      action: () => {
        navigation?.navigate('EucharisticMiracles');
        drawer.current?.closeDrawer();
      },
    },
  ];

  return (
    <View
      style={styles.container}
      testID="orationes-DrawerNavigationOrganism-View"
    >
      <Text style={styles.title}>{t('app')}</Text>
      {options.map((item, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={item.action}
          testID="orationes-DrawerNavigationOrganism-TouchableOpacity"
        >
          <MenuDrawerMolecule title={item.title} icon={item.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
