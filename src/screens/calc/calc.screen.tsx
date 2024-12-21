import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Modal, useWindowDimensions } from 'react-native';
import styles from './calc.styles';

export default function CalcScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        const sanitizedInput = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
        setResult(eval(sanitizedInput).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const getButtonStyle = (value: string) => {
    if (['+', '-', '×', '÷', '='].includes(value)) {
      return styles.operatorButton;
    } else if (value === 'AC' || value === '⌫' || value === '%') {
      return styles.clearButton;
    } else {
      return styles.numberButton;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {['AC', '⌫', '%', '÷'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['1', '2', '3', '×'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '-'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['7', '8', '9', '+'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.button, styles.settingsButton]}>
          <Text style={styles.buttonText}>⚙️</Text>
        </TouchableOpacity>
        {['0', '.', '='].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {isLandscape && (
        <View style={styles.row}>
          {['(', ')'].map((value) => (
            <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Configuraciones</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
