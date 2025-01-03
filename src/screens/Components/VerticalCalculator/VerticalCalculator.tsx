import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, darkStyles } from './VerticalCalculator.styles';

interface VerticalCalculatorProps {
  handlePress: (value: string) => void;
  getButtonStyle: (value: string) => object;
  setModalVisible: (visible: boolean) => void;
  isDarkMode: boolean;
  decimalSeparator: string;
}

const VerticalCalculator: React.FC<VerticalCalculatorProps> = ({ handlePress, getButtonStyle, setModalVisible, isDarkMode, decimalSeparator }) => {
  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
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
            <Ionicons name="settings-outline" style={styles.settingsIcon} />
          </TouchableOpacity>
          {['0', '.', '='].map((value) => (
            <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

export default VerticalCalculator;
