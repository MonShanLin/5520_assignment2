import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Helpers/styles'; 

export default function Activities({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 15 }}>
        <Button
          onPress={() => navigation.navigate('AddDiet')} // Navigate to AddDiet screen
          title="Add" // Text for the button
          color="white" // Button text color
        />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screenContainer}> 
      <ItemsList type="activities" />
    </View>
  );
}
