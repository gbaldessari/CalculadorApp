import React from 'react';
import { Modal, Text, Dimensions, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles, darkStyles } from './SettingsModal.styles';

interface SettingsModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  decimalSeparator: string;
  setDecimalSeparator: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalVisible, setModalVisible, isDarkMode, setIsDarkMode, decimalSeparator, setDecimalSeparator }) => {
  const screenHeight = Dimensions.get('window').height;
  const translateY = React.useRef(new Animated.Value(screenHeight)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (modalVisible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [modalVisible]);

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisible(false));
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <Animated.View style={[isDarkMode ? darkStyles.modalOverlay : styles.modalOverlay, { opacity }]}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[isDarkMode ? darkStyles.modalView : styles.modalView, { transform: [{ translateY }] }]}
            >
              <Text style={styles.modalText}>Configuraciones</Text>
              <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
                <Text style={styles.modalText}>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDecimalSeparator(decimalSeparator === '.' ? ',' : '.')}>
                <Text style={styles.modalText}>Separador Decimal: {decimalSeparator}</Text>
              </TouchableOpacity>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SettingsModal;
