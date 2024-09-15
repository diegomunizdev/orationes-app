import { render } from '@testing-library/react-native';
import Loading, { LoadingProps } from '../Loading';

const mockProps: LoadingProps = {
  title: undefined,
};

describe('Given <Loading/>', () => {
  const setup = (props: LoadingProps) => render(<Loading {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('loading-app');
    });

    it('Then a <ActivityIndicatior/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('loading-app-ActivityIndicatior');
    });

    describe('When the title has value', () => {
      it('Then the title should appear', () => {
        const { getByTestId } = setup({ ...mockProps, title: 'title' });
        getByTestId('loading-app-title');
      });
    });

    describe('When the title is not passed', () => {
      it('Then the title should not appear', () => {
        const { queryByTestId } = setup({ ...mockProps, title: undefined });
        expect(queryByTestId('loading-app-title')).toBeNull();
      });
    });
  });
});
