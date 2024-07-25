import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { useNavigationContext } from '../../../application/contexts/navigation/navigation.context';
import { useLayoutContext } from '../../../application/contexts/layout/layout.context';
import HomeHeader from '../../organisms/Home/HomeHeader/HomeHeader';

export default function ViewBase({ children }: PropsWithChildren): JSX.Element {
  const navigation = useNavigationContext();
  const { handleDrawer } = useLayoutContext();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    loadingOrError: { marginTop: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      testID="orationes-ViewBase-View"
    >
      <HomeHeader
        drawerNavigation={() => handleDrawer()}
        navigateToSettings={() => navigation?.navigate('Settings')}
      />

      {children}
    </ScrollView>
  );
}
