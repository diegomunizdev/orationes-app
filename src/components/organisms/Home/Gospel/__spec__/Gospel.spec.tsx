import { render } from '@testing-library/react-native';

import Gospel, { GospelProps } from '../Gospel';
import { FontSizeType } from '../../../../../infra/theme/theme';

const mockProps: GospelProps = {
  gospel: undefined,
  fontSize: FontSizeType.TEXT_24,
};

describe('Given <Gospel/>', () => {
  const setup = (props: GospelProps) => render(<Gospel {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-Gospel-ScrollView');
    });

    it('Then a <GospelContent/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-GospelContent-View');
    });
  });
});
