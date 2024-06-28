import { ScrollView, StyleSheet, View } from 'react-native';

import { useNavigation } from '../../../application/contexts/navigation/navigation.context';
import { useHomeContext } from '../../../application/contexts/home/home.context';
import { useLayoutContext } from '../../../application/contexts/layout/layout.context';
import HomeHeader from '../../organisms/Home/HomeHeader/HomeHeader';
import Loading from '../../shared/Loading/Loading';
import Error from '../../shared/Error/Error';
import DailyLiturgyHeader from '../../organisms/Home/DailyLiturgyHeader/DailyLiturgyHeader';
import TabContentNavigation from '../../organisms/Home/TabContentNavigation/TabContentNavigation';

export default function HomeTemplate(): JSX.Element {
  const navigation = useNavigation();
  const { handleDrawer, fontSize } = useLayoutContext();

  const { data, loading, error, handleDailyLiturgy } = useHomeContext();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    loadingOrError: { marginTop: 20 },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      testID="orationes-HomeTemplate-View"
    >
      <HomeHeader
        drawerNavigation={() => handleDrawer()}
        navigateToSettings={() => navigation?.navigate('Settings')}
      />

      {loading ? (
        <View style={styles.loadingOrError}>
          <Loading title="Buscando leituras..." />
        </View>
      ) : !loading && !!error ? (
        <View style={styles.loadingOrError}>
          <Error
            title="Erro ao obter leituras"
            subtitle="Não foi possível obter as leituras do dia. Por favor, tente novamente"
            actionTitle="Obter leituras"
            action={async () => await handleDailyLiturgy()}
          />
        </View>
      ) : data ? (
        <View style={styles.content} testID="orationes-HomeTemplate-data">
          <DailyLiturgyHeader dailyLiturgy={data} />
          <TabContentNavigation dailyLiturgy={data} fontSize={fontSize} />
        </View>
      ) : null}
    </ScrollView>
  );
}
