import { render } from '@testing-library/react-native';
import LoadingFallback, { LoadingFallbackProps } from '../LoadingFallback';

const mockProps: LoadingFallbackProps = {
  title: undefined,
};

describe('Given <LoadingFallback/>', () => {
  const setup = (props: LoadingFallbackProps) =>
    render(<LoadingFallback {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-LoadingFallback-View');
    });

    it('Then a <ActivityIndicatior/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-LoadingFallback-ActivityIndicator');
    });

    describe('When the title has value', () => {
      it('Then the title should appear', () => {
        const { getByTestId } = setup({ ...mockProps, title: 'title' });
        getByTestId('orationes-LoadingFallback-Text');
      });
    });

    describe('When the title is not passed', () => {
      it('Then the title should not appear', () => {
        const { queryByTestId } = setup({ ...mockProps, title: undefined });
        expect(queryByTestId('orationes-LoadingFallback-Text')).toBeNull();
      });
    });
  });
});
