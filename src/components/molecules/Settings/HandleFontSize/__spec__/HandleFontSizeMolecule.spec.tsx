import { fireEvent, render } from '@testing-library/react-native';
import HandleFontSizeMolecule, {
  HandleFontSizeOrganismProps,
} from '../HandleFontSizeMolecule';

const mockHandleFontSize = jest.fn();

const mockProps: HandleFontSizeOrganismProps = {
  handleFontSize: mockHandleFontSize,
};

describe('Given <HandleFontSizeMolecule/>', () => {
  const setup = (props: HandleFontSizeOrganismProps) =>
    render(<HandleFontSizeMolecule {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleFontSizeMolecule-View');
    });

    it('Then a increase touchable opacity opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleFontSizeMolecule-increase');
    });

    it('Then a restore touchable opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleFontSizeMolecule-restore');
    });

    it('Then a decrease touchable opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-HandleFontSizeMolecule-decrease');
    });
  });

  describe('When the increase touchable opacity receives an action', () => {
    it('Then should trigger an action to increase the font', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleFontSizeMolecule-increase');
      fireEvent.press(btn);
      expect(mockHandleFontSize).toHaveBeenCalled();
    });
  });

  describe('When the restore touchable opacity receives an action', () => {
    it('Then should trigger an action to restore the font', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleFontSizeMolecule-restore');
      fireEvent.press(btn);
      expect(mockHandleFontSize).toHaveBeenCalled();
    });
  });

  describe('When the decrease touchable opacity receives an action', () => {
    it('Then should trigger an action to decrease the font', () => {
      const { getByTestId } = setup(mockProps);
      const btn = getByTestId('orationes-HandleFontSizeMolecule-decrease');
      fireEvent.press(btn);
      expect(mockHandleFontSize).toHaveBeenCalled();
    });
  });
});
