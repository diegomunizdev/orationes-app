import { render } from '@testing-library/react-native';

import MenuDrawer, { MenuDrawerProps } from '../MenuDrawer';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  };
});

const mockProps: MenuDrawerProps = {
  title: 'title',
  icon: 'alarm',
};

describe('Given <MenuDrawer/>', () => {
  const setup = (props: MenuDrawerProps) => render(<MenuDrawer {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-MenuDrawer-View');
    });

    it('Then a icon should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-MenuDrawer-icon');
    });

    it('Then a title should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-MenuDrawer-title');
    });
  });
});
