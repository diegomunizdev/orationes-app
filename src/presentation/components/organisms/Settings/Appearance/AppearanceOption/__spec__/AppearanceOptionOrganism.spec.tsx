import { fireEvent, render } from '@testing-library/react-native';
import AppearanceOptionOrganism, {
  AppearanceOptionOrganismProps,
} from '../AppearanceOptionOrganism';

const mockOnPress = jest.fn();

const mockProps: AppearanceOptionOrganismProps = {
  title: 'title',
  subtitle: 'subtitle',
  icon: 'dots-vertical',
  onPress: mockOnPress,
};

describe('Given <AppearanceOptionOrganism/>', () => {
  const setup = (props: AppearanceOptionOrganismProps) =>
    render(<AppearanceOptionOrganism {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-AppearanceOptionOrganism-View');
    });

    it('Then a touchable opacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-AppearanceOptionOrganism-action');
    });

    it('Then a icon should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-AppearanceOptionOrganism-icon');
    });

    it('Then <SettingsItemMolecule/> should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-SettingsItem-View');
    });

    it('Then a dots vertical icon should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-AppearanceOptionOrganism-dots');
    });

    describe('When the option is assigned an action', () => {
      it('Then a function must be triggered', () => {
        const { getByTestId } = setup(mockProps);
        const btn = getByTestId('orationes-AppearanceOptionOrganism-action');
        fireEvent.press(btn);
        expect(mockOnPress).toHaveBeenCalled();
      });
    });
  });
});
