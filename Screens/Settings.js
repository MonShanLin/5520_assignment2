import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { ThemeContext } from '../Components/ThemeContext';
import { styles } from '../Helpers/styles';

export default function SettingsScreen() {
  const { toggleTheme } = useContext(ThemeContext); // Access the toggleTheme function from context

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.label}>Settings</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
