import { fireEvent, render } from '@testing-library/react-native';
import Button, { ButtonProps } from '../Button';

const mockOnPress = jest.fn();

const mockProps: ButtonProps = {
  title: 'title',
  onPress: mockOnPress,
};

describe('Given <Loading/>', () => {
  const setup = (props: ButtonProps) => render(<Button {...props} />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Button-TouchableOpacity');
    });
  });

  describe('When the back button is triggered', () => {
    it('Then it should trigger a function', () => {
      const { getByTestId } = setup(mockProps);
      const goBack = getByTestId('orationes-Button-TouchableOpacity');
      fireEvent.press(goBack);
      expect(mockOnPress).toHaveBeenCalled();
    });
  });
});
