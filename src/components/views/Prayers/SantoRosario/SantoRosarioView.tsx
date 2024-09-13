import { StyleSheet, View } from 'react-native';

import Header from '../../../shared/Header/Header';
import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';

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
