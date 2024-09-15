import { View } from 'react-native';
import HomeHeaderMolecule from '../../../molecules/HomeHeader/HomeHeaderMolecule';

export type HomeHeaderProps = {
  drawerNavigation: () => void;
  navigateToSettings: () => void;
};

export default function HomeHeader({
  drawerNavigation,
  navigateToSettings,
}: HomeHeaderProps): JSX.Element {
  return (
    <View testID="orationes-HomeHeader-View">
      <HomeHeaderMolecule
        drawerNavigation={drawerNavigation}
        navigateToSettings={navigateToSettings}
      />
    </View>
  );
}
