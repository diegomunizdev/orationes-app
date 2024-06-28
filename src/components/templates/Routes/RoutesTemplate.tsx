import React from 'react';
import { DrawerLayoutAndroid, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useLayoutContext } from '../../../application/contexts/layout/layout.context';
import { useNavigation } from '@react-navigation/native';
import { darkTheme, lightTheme } from '../../../infra/theme/theme';
import DrawerNavigationOrganism from '../../organisms/DrawerNavigation/DrawerNavigationOrganism';
import SettingsView from '../../views/Settings/SettingsView';
import AppearanceView from '../../views/Settings/Appearance/AppearanceView';
import InformationAppView from '../../views/Settings/InformationApp/InformationApp';
import HomeView from '../../views/Home/HomeView';

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
      </Stack.Navigator>
    </DrawerLayoutAndroid>
  );
}
