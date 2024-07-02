import { render } from '@testing-library/react-native';

import LiturgicalColorDay, {
  LiturgicalColorProps,
} from '../LiturgicalColorDay';
import { LiturgicalColorType } from '../../../../../domain/enums/Liturgy';
import { LITURGICAL_COLOR } from '../../../../../application/constants/liturgicalColor';

const mockProps: LiturgicalColorProps = {
  color: undefined,
};

describe('Given <LiturgicalColorDay/>', () => {
  const setup = (props: LiturgicalColorProps) =>
    render(<LiturgicalColorDay {...props} />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('orationes-LiturgicalColorDay-View');
    });

    describe(`When there's color`, () => {
      it('Then it should return green if property is green', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: LiturgicalColorType.GREEN,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe(
          LITURGICAL_COLOR[LiturgicalColorType.GREEN]
        );
      });

      it('Then it should return pink if property is pink', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: LiturgicalColorType.PINK,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe(
          LITURGICAL_COLOR[LiturgicalColorType.PINK]
        );
      });

      it('Then it should return purple if property is purple', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: LiturgicalColorType.PURPLE,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe(
          LITURGICAL_COLOR[LiturgicalColorType.PURPLE]
        );
      });

      it('Then it should return red if property is red', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: LiturgicalColorType.RED,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe(
          LITURGICAL_COLOR[LiturgicalColorType.RED]
        );
      });

      it('Then it should return white if property is white', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: LiturgicalColorType.WHITE,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe(
          LITURGICAL_COLOR[LiturgicalColorType.WHITE]
        );
      });
    });

    describe(`When color is undefined`, () => {
      it('Then it should return black if property is black', () => {
        const { getByTestId } = setup({
          ...mockProps,
          color: undefined,
        });
        const color = getByTestId('orationes-LiturgicalColorDay-color');

        expect(color.props.style.color).toBe('#FFFFFF');
      });
    });
  });
});
