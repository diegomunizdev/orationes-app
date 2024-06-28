import { render } from '@testing-library/react-native';

import PrimaryReading, { PrimaryReadingProps } from '../PrimaryReading';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: PrimaryReadingProps = {
  primaryReading: undefined,
  fontSize: FontSizeType.TEXT_24,
};

describe('Given <PrimaryReading/>', () => {
  const setup = (props: PrimaryReadingProps) =>
    render(<PrimaryReading {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrimaryReading-ScrollView');
    });

    it('Then a <PrimaryReadingContent/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-PrimaryReadingContent-View');
    });
  });
});
