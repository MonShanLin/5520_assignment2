import React from 'react';
import { View, Pressable, Text } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { styles } from '../Helpers/styles';

export default function ListScreen({ type, addScreenName, navigation, backgroundColor,textColor, }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable 
          onPress={() => navigation.navigate(addScreenName)} 
          style={{ marginRight: 15, padding: 10 }}
        >
          <Text style={{ color: 'black' }}>Add</Text>  
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      <ItemsList type={type} textColor={textColor} /> 
    </View>
  );
}

