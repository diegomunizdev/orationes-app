import { fireEvent, render } from '@testing-library/react-native';
import ContentFontSizeOrganism, {
  ContentFontSizeOrganismProps,
} from '../ContentFontSizeOrganism';

const mockHandleFontSize = jest.fn();
const mockOnDefine = jest.fn();

const mockProps: ContentFontSizeOrganismProps = {
  fontSize: 20,
  handleFontSize: mockHandleFontSize,
  onDefine: mockOnDefine,
};

describe('Given <ContentFontSizeOrganism/>', () => {
  const setup = (props: ContentFontSizeOrganismProps) =>
    render(<ContentFontSizeOrganism {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-ContentFontSizeOrganism-View');
    });

    it('Then <FontSizeInfoMolecule/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-FontSizeInfoMolecule-View');
    });

    it('Then a <TextLiturgy/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-TextLiturgy-Text');
    });

    describe('When the <HandleFontSizeMolecule/> is renderer', () => {
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

    describe('When the onDefine receives an action', () => {
      it('Then should trigger an action', () => {
        const { getByTestId } = setup(mockProps);
        const btn = getByTestId('orationes-Button-TouchableOpacity');
        fireEvent.press(btn);
        expect(mockOnDefine).toHaveBeenCalled();
      });
    });
  });
});
