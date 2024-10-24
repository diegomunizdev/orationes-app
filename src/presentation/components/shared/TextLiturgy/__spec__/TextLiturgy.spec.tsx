import { render } from '@testing-library/react-native';

import TextLiturgy from '../TextLiturgy';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  };
});

describe('Given <TextLiturgy/>', () => {
  const setup = () => render(<TextLiturgy />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-TextLiturgy-Text');
    });
  });
});
