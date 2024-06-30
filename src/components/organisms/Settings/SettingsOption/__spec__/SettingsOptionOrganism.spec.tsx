import { fireEvent, render } from '@testing-library/react-native';
import SettingsOptionOrganism, {
  SettingsOptionProps,
} from '../SettingsOptionOrganism';

const mockAction = jest.fn();

const mockProps: SettingsOptionProps = {
  title: 'title',
  subtitle: 'subtitle',
  icon: 'chevron-down',
  action: mockAction,
};

describe('Given <SettingsOptionOrganism/>', () => {
  const setup = (props: SettingsOptionProps) =>
    render(<SettingsOptionOrganism {...props} />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SettingsOption-TouchableOpacity');
    });

    it('Then a content should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-SettingsOption-View');
    });

    it('Then <SettingsItem/> should appear', () => {
      const { getAllByTestId } = setup(mockProps);
      getAllByTestId('orationes-SettingsItem-View');
    });

    describe('When option receive action', () => {
      it('Then a function must be triggered', () => {
        const { getByTestId } = setup(mockProps);
        const touchableOpacity = getByTestId(
          'orationes-SettingsOption-TouchableOpacity'
        );
        fireEvent.press(touchableOpacity);
        expect(mockAction).toHaveBeenCalled();
      });
    });
  });
});
