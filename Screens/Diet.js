import React from 'react';
import { View, Text } from 'react-native';
import ItemsList from '../Components/ItemsList';

export default Diet = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
        Diet
      </Text>
      <ItemsList type="diet" />
    </View>
  );
}



