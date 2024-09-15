import { fireEvent, render } from '@testing-library/react-native';

import Error, { ErrorProps } from '../Error';

const mockProps: ErrorProps = {
  title: 'title',
  subtitle: undefined,
  actionTitle: undefined,
  action: undefined,
};

describe('Given <Error/>', () => {
  const setup = (props: ErrorProps) => render(<Error {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Error-View');
    });

    it('Then a title should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Error-title');
    });

    describe('When the subtitle exists', () => {
      it('Then the subtitle should appear', () => {
        const { getByTestId } = setup({ ...mockProps, subtitle: 'subtitle' });
        getByTestId('orationes-Error-subtitle');
      });
    });

    describe(`When it doesn't have the subtitle`, () => {
      it('Then no subtitle should appear', () => {
        const { queryByTestId } = setup({ ...mockProps, subtitle: undefined });
        expect(queryByTestId('orationes-Error-subtitle')).toBeNull();
      });
    });

    describe('When action is available', () => {
      it('Then the button should be available', () => {
        const { getByTestId } = setup({
          ...mockProps,
          actionTitle: 'action',
          action: jest.fn(),
        });
        getByTestId('orationes-Error-actionTitle');
      });

      it('Then it should trigger a function when the action is clicked', () => {
        const mockAction = jest.fn();
        const { getByTestId } = setup({
          ...mockProps,
          actionTitle: 'action',
          action: mockAction,
        });
        const btn = getByTestId('orationes-Button-TouchableOpacity');
        fireEvent.press(btn);
        expect(mockAction).toHaveBeenCalled();
      });
    });

    describe('When action is not available', () => {
      it('Then the button should not appear', () => {
        const { queryByTestId } = setup({
          ...mockProps,
          actionTitle: undefined,
        });
        expect(queryByTestId('orationes-Error-actionTitle')).toBeNull();
      });
    });
  });
});
