import React from 'react';
import { View, Text, Modal, Animated, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { styles, darkStyles } from './HistoryModal.styles';

interface HistoryProps {
  history: string[];
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isDarkMode: boolean;
}

const HistoryModal: React.FC<HistoryProps> = ({ history, modalVisible, setModalVisible, isDarkMode }) => {
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
              <ScrollView>
                {history.map((item, index) => {
                  const [operation, result] = item.split(' = ');
                  return (
                    <View key={index} style={styles.historyEntry}>
                      <Text style={styles.historyOperation}>{operation}</Text>
                      <Text style={styles.historyResult}>{result}</Text>
                      <View style={styles.historySeparator} />
                    </View>
                  );
                })}
              </ScrollView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HistoryModal;