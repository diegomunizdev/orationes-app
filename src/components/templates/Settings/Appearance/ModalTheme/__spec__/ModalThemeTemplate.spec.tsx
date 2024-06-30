import { fireEvent, render } from '@testing-library/react-native';

import ModalThemeTemplate, {
  ModalThemeTemplateProps,
} from '../ModalThemeTemplate';

const mockOnClose = jest.fn();
const mockHandleTheme = jest.fn();

const mockProps: ModalThemeTemplateProps = {
  visible: true,
  onClose: mockOnClose,
  handleTheme: mockHandleTheme,
};

describe('Given <ModalThemeTemplate/>', () => {
  const setup = (props: ModalThemeTemplateProps) =>
    render(<ModalThemeTemplate {...props} />);

  describe('When the component is not rendered', () => {
    it('Then the <Modal/> should not appear', () => {
      const { queryByTestId } = setup({ ...mockProps, visible: false });
      expect(queryByTestId('orationes-ModalThemeTemplate-Modal')).toBeNull();
    });
  });

  describe('When the component is renderer', () => {
    it('Then a <Modal/> should appear', () => {
      const { getByTestId } = setup({ ...mockProps, visible: true });
      getByTestId('orationes-ModalThemeTemplate-Modal');
    });

    it('Then a content should appear', () => {
      const { getByTestId } = setup({ ...mockProps, visible: true });
      getByTestId('orationes-ModalThemeTemplate-content');
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
});
