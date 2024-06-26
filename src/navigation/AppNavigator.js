import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThemeContext from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={{ colors: { background: currentTheme.backgroundColor } }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: currentTheme.buttonColor },
          tabBarLabelStyle: { color: currentTheme.buttonTextColor },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
