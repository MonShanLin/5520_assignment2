import React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';

export default function SettingsScreen() {
  const { toggleTheme } = useTheme();// Access the toggleTheme function from the custom hook

  return (
    <View style={styles.screenContainer}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
