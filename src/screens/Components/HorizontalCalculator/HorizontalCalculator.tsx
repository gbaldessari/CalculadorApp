import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles, darkStyles } from './HorizontalCalculator.styles';

interface HorizontalCalculatorProps {
  handlePress: (value: string) => void;
  getButtonStyle: (value: string) => object;
  isDarkMode: boolean;
  decimalSeparator: string;
}

const HorizontalCalculator: React.FC<HorizontalCalculatorProps> = ({ handlePress, getButtonStyle, isDarkMode, decimalSeparator }) => {
  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <View style={styles.row}>
        {['(', ')'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={[styles.button, getButtonStyle(value)]}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HorizontalCalculator;
