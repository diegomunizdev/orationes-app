import { Modal, StyleSheet, View } from 'react-native';

import { useLayoutContext } from '../../../../../application/contexts/layout/layout.context';
import ContentFontSizeOrganism from '../../../../organisms/Settings/Appearance/ContentFontSize/ContentFontSizeOrganism';

export type ModalFontSizeTemplateProps = {
  visible: boolean;
  onClose: () => void;
  handleFontSize: (scale: 'mais' | 'menos' | undefined) => void;
};

export default function ModalFontSizeTemplate({
  visible,
  onClose,
  handleFontSize,
}: ModalFontSizeTemplateProps): JSX.Element {
  const { fontSize } = useLayoutContext();

  const styles = StyleSheet.create({
    modal: { borderRadius: 30 },
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
      testID="orationes-ModalFontSizeTemplate-Modal"
    >
      <View
        style={styles.content}
        testID="orationes-ModalFontSizeTemplate-content"
      >
        <ContentFontSizeOrganism
          fontSize={fontSize}
          handleFontSize={handleFontSize}
          onDefine={onClose}
        />
      </View>
    </Modal>
  );
}
