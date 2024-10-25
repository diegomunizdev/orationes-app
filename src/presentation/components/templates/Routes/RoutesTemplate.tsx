import React from 'react';
import { DrawerLayoutAndroid, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useLayoutContext } from '../../../../application/contexts/layout/layout.context';
import DrawerNavigationOrganism from '../../organisms/DrawerNavigation/DrawerNavigationOrganism';
import { darkTheme, lightTheme } from '../../../../infra/theme/theme';
import HomeView from '../../../screens/Home/HomeView';
import SettingsView from '../../../screens/Settings/SettingsView';
import AppearanceView from '../../../screens/Settings/Appearance/AppearanceView';
import InformationAppView from '../../../screens/Settings/InformationApp/InformationApp';
import PrayersView from '../../../screens/Prayers/PrayersView';
import AlmaDeCristoView from '../../../screens/Prayers/AlmaDeCristo/AlmaDeCristoView';
import SantoRosarioView from '../../../screens/Prayers/SantoRosario/SantoRosarioView';
import JesusSacramentadoView from '../../../screens/Prayers/JesusSacramentado/JesusSacramentadoView';
import SaoBentoView from '../../../screens/Prayers/SaoBento/SaoBentoView';
import SaoMiguelView from '../../../screens/Prayers/SaoMiguel/SaoMiguelView';

const Stack = createNativeStackNavigator();

export default function RoutesTemplate() {
  const { drawer, theme } = useLayoutContext();
  const navigation = useNavigation();

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => (
        <DrawerNavigationOrganism
          drawer={drawer}
          navigation={navigation}
          theme={theme === 'dark' ? darkTheme : lightTheme}
        />
      )}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { paddingTop: StatusBar.currentHeight },
        }}
      >
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Settings" component={SettingsView} />
        <Stack.Screen name="Appearance" component={AppearanceView} />
        <Stack.Screen name="InformationApp" component={InformationAppView} />
        <Stack.Screen name="Prayers" component={PrayersView} />
        <Stack.Screen
          name="Prayers.AlmaDeCristo"
          component={AlmaDeCristoView}
        />
        <Stack.Screen
          name="Prayers.SantoRosario"
          component={SantoRosarioView}
        />
        <Stack.Screen
          name="Prayers.JesusSacramentado"
          component={JesusSacramentadoView}
        />
        <Stack.Screen name="Prayers.SaoBento" component={SaoBentoView} />
        <Stack.Screen name="Prayers.SaoMiguel" component={SaoMiguelView} />
      </Stack.Navigator>
    </DrawerLayoutAndroid>
  );
}
