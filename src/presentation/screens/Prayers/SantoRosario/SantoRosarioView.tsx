import { StyleSheet, View } from 'react-native';

import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';
import Header from '../../../components/shared/Header/Header';

export default function SantoRosarioView(): JSX.Element {
  const navigation = useNavigationContext();

  const styles = StyleSheet.create({
    container: {
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Header title="Santo Rosário" goBack={() => navigation?.goBack()} />
    </View>
  );
}
