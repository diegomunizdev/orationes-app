import { StyleSheet, Text, View } from 'react-native';
import { LiturgicalColorType } from '../../../../domain/enums/Liturgy';
import {
  LITURGICAL_BACKGROUND_COLOR,
  LITURGICAL_COLOR,
} from '../../../../application/constants/liturgicalColor';

export type LiturgicalColorProps = {
  color: LiturgicalColorType | undefined;
};

export default function LiturgicalColorDay({
  color,
}: LiturgicalColorProps): JSX.Element {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: color ? LITURGICAL_BACKGROUND_COLOR[color] : '#FFFFFF',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
    },
    text: {
      color: color ? LITURGICAL_COLOR[color] : '#FFFFFF',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container} testID="orationes-LiturgicalColorDay-View">
      <Text style={styles.text} testID="orationes-LiturgicalColorDay-color">
        {color}
      </Text>
    </View>
  );
}
