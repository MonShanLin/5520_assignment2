import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Helpers/styles'; 

export default function Activities({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('AddActivity')}>
          <Ionicons name="add" size={24} color="white" style={{ marginRight: 15 }} />
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
