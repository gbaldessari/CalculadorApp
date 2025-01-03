import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Modal, useWindowDimensions } from 'react-native';
import { styles, darkStyles } from './Calculator.styles';
import VerticalCalculator from './Components/VerticalCalculator/VerticalCalculator';
import HorizontalCalculator from './Components/HorizontalCalculator/HorizontalCalculator';
import HistoryModal from './Components/HistoryModal/HistoryModal';
import SettingsModal from './Components/SettingsModal/SettingsModal';

const handlePress = (value: string, input: string, setInput: React.Dispatch<React.SetStateAction<string>>, setSavedInput: React.Dispatch<React.SetStateAction<string>>, setHistory: React.Dispatch<React.SetStateAction<string[]>>, history: string[], setSaveResult: React.Dispatch<React.SetStateAction<boolean>>, saveResult: boolean) => {
  if (value === '=') {
    try {
      let sanitizedInput = input.replace(/×/g, '*').replace(/÷/g, '/');
      if (sanitizedInput.includes('%')) {
        const parts = sanitizedInput.split('%');
        if (parts.length === 2 && parts[1].trim() !== '') {
          sanitizedInput = `${parts[0]} % ${parts[1]}`;
        } else {
          sanitizedInput = sanitizedInput.replace(/%/g, '/100');
        }
      }
      if (sanitizedInput.includes('/0') || sanitizedInput.includes('% 0')) {
        throw new Error('Division by zero');
      }
      let result = eval(sanitizedInput).toString();
      if (result.includes('.') && result.split('.')[1].length > 3) {
        result = parseFloat(result).toFixed(3);
      }
      result = parseFloat(result).toString();
      setSavedInput(input);
      setInput(result);
      setHistory([...history, `${input} = ${result}`]);
      setSaveResult(true);
    } catch (e) {
      setInput('Indefinido');
    }
  }
  else if (value === 'AC') {
    setSavedInput('');
    setInput('');
    setSaveResult(false);
  } else if (value === '⌫') {
    setInput(input.slice(0, -1));
  } else {
    if (['+', '-', '×', '÷'].includes(value) && saveResult) {
      setInput(input + value);
      setSaveResult(false);
    } else {
      if (!['+', '-', '×', '÷'].includes(value) && saveResult) {
        setSavedInput('');
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
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

const Calculator: React.FC = () => {
  const [savedInput, setSavedInput] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);
  const [saveResult, setSaveResult] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [decimalSeparator, setDecimalSeparator] = useState<string>('.');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <TouchableOpacity
        style={{ ...styles.historyButton, backgroundColor: 'transparent' }}
        onPress={() => setHistoryVisible(true)}
      >
        <Text style={styles.historyButtonText}>≡</Text>
      </TouchableOpacity>
      <Text style={styles.savedInput}>{savedInput}</Text>
      <Text style={styles.input}>{input}</Text>
      <VerticalCalculator
        handlePress={(value: string) => handlePress(value, input, setInput, setSavedInput, setHistory, history, setSaveResult, saveResult)}
        getButtonStyle={(value: string) => getButtonStyle(value)}
        setModalVisible={setModalVisible}
        isDarkMode={isDarkMode}
        decimalSeparator={decimalSeparator}
      />
      {isLandscape &&
        <HorizontalCalculator
          handlePress={(value: string) => handlePress(value, input, setInput, setSavedInput, setHistory, history, setSaveResult, saveResult)}
          getButtonStyle={(value: string) => getButtonStyle(value)}
          isDarkMode={isDarkMode}
          decimalSeparator={decimalSeparator}
        />
      }
      <StatusBar style="auto" />
      <HistoryModal
        history={history}
        modalVisible={historyVisible}
        setModalVisible={setHistoryVisible}
        isDarkMode={isDarkMode}
      />
      <SettingsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        decimalSeparator={decimalSeparator}
        setDecimalSeparator={setDecimalSeparator}
      />
    </View>
  );
}

export default Calculator;
