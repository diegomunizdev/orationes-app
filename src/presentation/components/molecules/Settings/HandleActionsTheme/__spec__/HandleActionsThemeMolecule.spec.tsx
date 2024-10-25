import { fireEvent, render } from '@testing-library/react-native';
import HandleActionsThemeMolecule, {
  HandleActionsThemeMoleculeProps,
} from '../HandleActionsThemeMolecule';

const mockHandleTheme = jest.fn();
const mockOnClose = jest.fn();

const mockProps: HandleActionsThemeMoleculeProps = {
  handleTheme: mockHandleTheme,
  onClose: mockOnClose,
};

describe('Given <HandleActionsThemeMolecule/>', () => {
  const setup = (props: HandleActionsThemeMoleculeProps) =>
    render(<HandleActionsThemeMolecule {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleActionsThemeMolecule-View');
    });

    it('Then a light touchable opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleActionsThemeMolecule-light');
    });

    it('Then a dark touchable opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleActionsThemeMolecule-dark');
    });
  });

  describe('When the light touchable opacity receives an action', () => {
    it('Then should trigger an action to change theme', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleActionsThemeMolecule-light');
      fireEvent.press(btn);
      expect(mockHandleTheme).toHaveBeenCalled();
    });

    it('Then should trigger an action to close the modal', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleActionsThemeMolecule-light');
      fireEvent.press(btn);
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe('When the dark touchable opacity receives an action', () => {
    it('Then should trigger an action to change theme', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleActionsThemeMolecule-dark');
      fireEvent.press(btn);
      expect(mockHandleTheme).toHaveBeenCalled();
    });

    it('Then should trigger an action to close the modal', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleActionsThemeMolecule-dark');
      fireEvent.press(btn);
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
