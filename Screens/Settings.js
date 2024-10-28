import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';
import { useThemeStyles } from '../Components/useThemeStyles';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const { backgroundColor, textColor } = useThemeStyles();

  return (
    <View
      style={[
        styles.screenContainer,
        { backgroundColor, justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Pressable
        onPress={toggleTheme}
        style={[
          styles.button,
          { backgroundColor: '#b56eb5', padding: 10, borderRadius: 5 },
        ]}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          Toggle Theme
        </Text>
      </Pressable>
    </View>
  );
}
