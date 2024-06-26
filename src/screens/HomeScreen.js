import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={{ color: currentTheme.textColor }}>Home Screen</Text>
      <CustomButton title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
