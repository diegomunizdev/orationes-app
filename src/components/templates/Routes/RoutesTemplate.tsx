import React from 'react';
import { DrawerLayoutAndroid, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useLayoutContext } from '../../../application/contexts/layout/layout.context';
import { darkTheme, lightTheme } from '../../../infra/theme/theme';
import DrawerNavigationOrganism from '../../organisms/DrawerNavigation/DrawerNavigationOrganism';
import SettingsView from '../../views/Settings/SettingsView';
import AppearanceView from '../../views/Settings/Appearance/AppearanceView';
import InformationAppView from '../../views/Settings/InformationApp/InformationApp';
import HomeView from '../../views/Home/HomeView';
import PrayersView from '../../views/Prayers/PrayersView';
import EucharisticMiraclesView from '../../views/EucharisticMiracles/EucharisticMiraclesView';
import AlmaDeCristoView from '../../views/Prayers/AlmaDeCristo/AlmaDeCristoView';
import SantoRosarioView from '../../views/Prayers/SantoRosario/SantoRosarioView';
import JesusSacramentadoView from '../../views/Prayers/JesusSacramentado/JesusSacramentadoView';
import SaoBentoView from '../../views/Prayers/SaoBento/SaoBentoView';
import SaoMiguelView from '../../views/Prayers/SaoMiguel/SaoMiguelView';
import { useNavigationContext } from '../../../application/contexts/navigation/navigation.context';

const Stack = createNativeStackNavigator();

export default function RoutesTemplate() {
  const { drawer, theme } = useLayoutContext();
  const navigation = useNavigationContext();

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
        <Stack.Screen
          name="EucharisticMiracles"
          component={EucharisticMiraclesView}
        />
      </Stack.Navigator>
    </DrawerLayoutAndroid>
  );
}
