import React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';
import { useThemeStyles } from '../Components/useThemeStyles';


export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();// Access the toggleTheme function from the custom hook
  const { backgroundColor, textColor } = useThemeStyles(); 

  return (
    <View style={[styles.screenContainer, { backgroundColor , justifyContent: 'center', alignItems: 'center' }]}>
      <Button title="Toggle Theme" onPress={toggleTheme} color={textColor} />
    </View>
  );
}

