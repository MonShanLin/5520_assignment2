import React from 'react';
import { View, Pressable, Text } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { styles } from '../Helpers/styles';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

export default function ListScreen({ type, addScreenName, navigation, backgroundColor,textColor, }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
          <Pressable 
            onPress={() => navigation.navigate(addScreenName)} 
            style={{ padding: 10 }}
          >
            <FontAwesome5 name="plus" size={24} color="white" />
          </Pressable>

          <Pressable 
            onPress={() => navigation.navigate(addScreenName)} 
            style={{ marginRight: 15, padding: 10 }}
          >
            {type === 'diet' ? (
              <FontAwesome5 name="utensils" size={24} color="white" />
            ) : (
              <FontAwesome5 name="running" size={24} color="white" />
            )}
          </Pressable>

          

        </View>
      ),
    });
  }, [navigation, type]);

  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      <ItemsList type={type} textColor={textColor} /> 
    </View>
  );
}

