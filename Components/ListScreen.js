import React from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { styles } from '../Helpers/styles';

export default function ListScreen({ type, addScreenName, navigation, backgroundColor,textColor, }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Button
            onPress={() => navigation.navigate(addScreenName)} // Navigate to the appropriate screen
            title="Add" // Text for the button
            color="black" // Button text color
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      <ItemsList type={type} textColor={textColor} /> 
    </View>
  );
}

