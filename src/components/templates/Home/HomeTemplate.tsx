import { StyleSheet, View } from 'react-native';

import { useHomeContext } from '../../../application/contexts/home/home.context';
import Loading from '../../shared/Loading/Loading';
import Error from '../../shared/Error/Error';
import DailyLiturgyHeader from '../../organisms/Home/DailyLiturgyHeader/DailyLiturgyHeader';
import TabContentNavigation from '../../organisms/Home/TabContentNavigation/TabContentNavigation';
import ViewBase from '../../shared/ViewBase/ViewBase';

export default function HomeTemplate(): JSX.Element {
  const { data, loading, error, handleDailyLiturgy } = useHomeContext();

  const styles = StyleSheet.create({
    content: { flex: 1 },
    loadingOrError: { marginTop: 20 },
  });

  return (
    <ViewBase>
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
          <TabContentNavigation dailyLiturgy={data} />
        </View>
      ) : null}
    </ViewBase>
  );
}
