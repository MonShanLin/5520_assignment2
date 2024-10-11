import React from 'react';
import { View, Text } from 'react-native';
import ItemsList from '../Components/ItemsList';

const Activities = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
        Activities
      </Text>
      <ItemsList type="activities" />
    </View>
  );
};

export default Activities;
