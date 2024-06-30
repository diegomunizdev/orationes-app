import { AppearanceContextProps } from '../../contexts/settings/appearance/appearance.context';

export const mockAppearanceContext: AppearanceContextProps = {
  modalVisibleTheme: true,
  handleModalTheme: jest.fn(),
  modalVisibleFontSize: true,
  handleModalFontSize: jest.fn(),
};
