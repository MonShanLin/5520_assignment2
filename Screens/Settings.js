import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';
import { useThemeStyles } from '../Components/useThemeStyles';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme(); // Access the toggleTheme function from the custom hook
  const { backgroundColor, textColor } = useThemeStyles();

  return (
    <View
      style={[
        styles.screenContainer,
        { backgroundColor, justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.button, { backgroundColor: '#800080' }]}
      >
        <Text style={[styles.buttonText, { color: backgroundColor }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}
