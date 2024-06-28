import { render } from '@testing-library/react-native';

import HomeTemplate from '../../../templates/Home/HomeTemplate';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Given <HomeView/>', () => {
  const setup = () => render(<HomeTemplate />);

  describe('When the component is renderer', () => {
    it('Then a <HomeTemplate/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('orationes-HomeTemplate-View');
    });
  });
});
