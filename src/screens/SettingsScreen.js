import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';

const SettingsScreen = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={{ color: currentTheme.textColor }}>Settings Screen</Text>
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

export default SettingsScreen;
