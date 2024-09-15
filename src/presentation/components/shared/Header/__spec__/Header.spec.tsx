import { fireEvent, render } from '@testing-library/react-native';
import Header, { HeaderProps } from '../Header';

const mockGoBack = jest.fn();

const mockProps: HeaderProps = {
  title: 'title',
  goBack: mockGoBack,
};

describe('Given <Loading/>', () => {
  const setup = (props: HeaderProps) => render(<Header {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Header-View');
    });
  });

  describe('When the back button is triggered', () => {
    it('Then it should trigger a function', () => {
      const { getByTestId } = setup(mockProps);
      const goBack = getByTestId('orations-Header-goBack');
      fireEvent.press(goBack);
      expect(mockGoBack).toHaveBeenCalled();
    });
  });
});
