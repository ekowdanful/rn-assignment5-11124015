import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const CustomButton = ({ title, onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.button, theme === 'light' ? styles.light : styles.dark]}
      onPress={onPress}
    >
      <Text style={theme === 'light' ? styles.lightText : styles.darkText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  light: {
    backgroundColor: '#ddd',
  },
  dark: {
    backgroundColor: '#555',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default CustomButton;
