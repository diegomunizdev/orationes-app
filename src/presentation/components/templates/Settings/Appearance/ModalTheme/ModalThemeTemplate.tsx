import { Modal, StyleSheet, View } from 'react-native';
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
  const styles = StyleSheet.create({
    modal: {
      borderRadius: 30,
    },
    content: {
      flex: 1,
      justifyContent: 'flex-end',
      borderRadius: 50,
    },
  });
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      style={styles.modal}
      onRequestClose={onClose}
      testID="orationes-ModalThemeTemplate-Modal"
    >
      <View
        style={styles.content}
        testID="orationes-ModalThemeTemplate-content"
      >
        <ContentThemeOrganism handleTheme={handleTheme} onClose={onClose} />
      </View>
    </Modal>
  );
}
