import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFeatureFlag } from 'configcat-react';

import { darkTheme, lightTheme } from '../../infra/theme/theme';
import { useLayoutContext } from '../../application/contexts/layout/layout.context';
import MaintenanceTemplate from '../templates/Maintenance/MaintenanceTemplate';
import RoutesTemplate from '../templates/Routes/RoutesTemplate';

export default function Routes() {
  const { theme } = useLayoutContext();
  const { value: maintenanceApplicationValue } = useFeatureFlag(
    'maintenanceApplication',
    false
  );

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBarExpo style={theme === 'dark' ? 'light' : 'dark'} />
      {maintenanceApplicationValue ? (
        <MaintenanceTemplate />
      ) : (
        <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
          <RoutesTemplate />
        </NavigationContainer>
      )}
    </ScrollView>
  );
}
