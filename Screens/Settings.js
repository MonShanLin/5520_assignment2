import React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();// Access the toggleTheme function from the custom hook

  const backgroundColor = theme === 'light' ? '#ceb9ed' : '#9b64ed'; // Change background based on theme
  const textColor = theme === 'light' ? 'black' : 'white'; // Change text color based on theme

  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      <Button title="Toggle Theme" onPress={toggleTheme} color={textColor} />
    </View>
  );
}

