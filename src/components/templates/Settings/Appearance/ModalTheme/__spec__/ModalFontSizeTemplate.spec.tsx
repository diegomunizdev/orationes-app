import { fireEvent, render } from '@testing-library/react-native';

import ModalFontSizeTemplate, {
  ModalFontSizeTemplateProps,
} from '../ModalFontSizeTemplate';

const mockOnClose = jest.fn();
const mockHandleFontSize = jest.fn();

const mockProps: ModalFontSizeTemplateProps = {
  visible: true,
  onClose: mockOnClose,
  handleFontSize: mockHandleFontSize,
};

describe('Given <ModalFontSizeTemplate/>', () => {
  const setup = (props: ModalFontSizeTemplateProps) =>
    render(<ModalFontSizeTemplate {...props} />);

  describe('When the component is not rendered', () => {
    it('Then the <Modal/> should not appear', () => {
      const { queryByTestId } = setup({ ...mockProps, visible: false });
      expect(queryByTestId('orationes-ModalFontSizeTemplate-Modal')).toBeNull();
    });
  });

  describe('When the component is renderer', () => {
    it('Then a <Modal/> should appear', () => {
      const { getByTestId } = setup({ ...mockProps, visible: true });
      getByTestId('orationes-ModalFontSizeTemplate-Modal');
    });

    it('Then a content should appear', () => {
      const { getByTestId } = setup({ ...mockProps, visible: true });
      getByTestId('orationes-ModalFontSizeTemplate-content');
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
  });
});
