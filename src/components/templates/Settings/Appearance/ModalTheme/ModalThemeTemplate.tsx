import { Modal, View } from 'react-native';
import ContentThemeOrganism from '../../../../organisms/Settings/Appearance/ContentTheme/ContentThemeOrganism';

export type ModalThemeTemplateProps = {
  visible: boolean;
  onClose: () => void;
  handleTheme: (theme: string) => void;
};

export default function ModalThemeTemplate({
  visible,
  onClose,
  handleTheme,
}: ModalThemeTemplateProps): JSX.Element {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      style={{ borderRadius: 30 }}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          borderRadius: 50,
        }}
      >
        <ContentThemeOrganism handleTheme={handleTheme} onClose={onClose} />
      </View>
    </Modal>
  );
}
