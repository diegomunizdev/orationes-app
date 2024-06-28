import { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '../../../../application/contexts/navigation/navigation.context';
import { useTheme } from '@react-navigation/native';
import { useLayoutContext } from '../../../../application/contexts/layout/layout.context';
import TextLiturgy from '../../../shared/TextLiturgy/TextLiturgy';
import Button from '../../../shared/Button/Button';
import Header from '../../../shared/Header/Header';
import { FontSizeType } from '../../../../infra/theme/theme';

export default function AppearanceTemplate(): JSX.Element {
  const [modalVisibleTheme, setModalVisibleTheme] = useState<boolean>(false);
  const [modalVisibleFontSize, setModalVisibleFontSize] =
    useState<boolean>(false);
  const navigation = useNavigation();
  const { handleTheme, fontSize, handleFontSize } = useLayoutContext();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
  });

  const options = [
    {
      icon: 'theme-light-dark',
      title: 'Tema',
      subtitle: 'Escolha entre claro e escuro.',
      action: () => setModalVisibleTheme((prevState) => !prevState),
    },
    {
      icon: 'format-size',
      title: 'Tamanho da fonte',
      subtitle: 'Escolha o tamanho da fonte dos textos.',
      action: () => setModalVisibleFontSize((prevState) => !prevState),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Modal
        animationType="slide"
        visible={modalVisibleTheme}
        transparent={true}
        style={{ borderRadius: 30 }}
        onRequestClose={() => {
          setModalVisibleTheme((prevState) => !prevState);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            borderRadius: 50,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.card,
              padding: 20,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingBottom: 50,
              gap: 30,
            }}
          >
            <Text style={{ color: colors.text, fontWeight: 'bold' }}>
              Escolha o tema:
            </Text>
            <View style={{ gap: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  handleTheme('light');
                  setModalVisibleTheme((prevState) => !prevState);
                }}
              >
                <Text style={{ color: colors.text }} allowFontScaling={true}>
                  Claro
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleTheme('dark');
                  setModalVisibleTheme((prevState) => !prevState);
                }}
              >
                <Text style={{ color: colors.text }}>Escuro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={modalVisibleFontSize}
        transparent={true}
        style={{ borderRadius: 30 }}
        onRequestClose={() => {
          setModalVisibleFontSize((prevState) => !prevState);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            borderRadius: 50,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.card,
              padding: 20,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              gap: 50,
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Escolha o tamanho da fonte:
            </Text>

            <View
              style={{
                backgroundColor: colors.background,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <MaterialCommunityIcons
                name="information-outline"
                size={20}
                color={colors.text}
              />
              <Text
                style={{
                  color: colors.text,
                  flex: 1,
                  fontSize: FontSizeType.TEXT_12,
                }}
              >
                Ao aumentar ou diminuir a fonte, apenas as leituras e orações
                que sofrem a mudança.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleFontSize('mais');
                }}
              >
                <MaterialCommunityIcons
                  name="format-font-size-increase"
                  size={24}
                  color={colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleFontSize(undefined);
                }}
              >
                <MaterialCommunityIcons
                  name="backup-restore"
                  size={24}
                  color={colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleFontSize('menos');
                }}
              >
                <MaterialCommunityIcons
                  name="format-font-size-decrease"
                  size={24}
                  color={colors.text}
                />
              </TouchableOpacity>
            </View>

            <TextLiturgy valueSize={fontSize} style={{ textAlign: 'center' }}>
              Este texto é um exemplo do tamanho da fonte desejada.
            </TextLiturgy>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <Button
                title="definir"
                onPress={() => {
                  setModalVisibleFontSize((prevState) => !prevState);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Header title="Aparência" goBack={() => navigation?.goBack()} />
      <View>
        {options.map((item, index: number) => (
          <TouchableOpacity key={index} onPress={item.action}>
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <MaterialCommunityIcons
                name={item.icon as never}
                color={colors.text}
                size={20}
              />
              <View style={{ marginHorizontal: 8, flex: 1 }}>
                <Text style={{ color: colors.text, fontWeight: 'bold' }}>
                  {item.title}
                </Text>
                <Text style={{ color: '#8F8F8F' }}>{item.subtitle}</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-vertical"
                color={colors.text}
                size={20}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
