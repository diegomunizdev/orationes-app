import { render } from '@testing-library/react-native';

import TextLiturgy, { TextLiturgyProps } from '../TextLiturgy';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  };
});

const mockProps: TextLiturgyProps = {
  valueSize: 20,
};

describe('Given <TextLiturgy/>', () => {
  const setup = (props: TextLiturgyProps) => render(<TextLiturgy {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-TextLiturgy-Text');
    });
  });
});
