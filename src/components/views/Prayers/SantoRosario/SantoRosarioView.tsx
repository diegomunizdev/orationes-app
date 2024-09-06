import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../shared/Header/Header';

export default function SantoRosarioView(): JSX.Element {
  const { goBack } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Header title="Santo Rosário" goBack={() => goBack()} />
    </View>
  );
}
