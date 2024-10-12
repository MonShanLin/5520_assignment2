import React from 'react';
import ListScreen from '../Components/ListScreen';

export default function DietScreen({ navigation }) {
  return (
    <ListScreen
      type="diet" // Pass the type as "diet"
      addScreenName="AddDiet" // Pass the screen name for the "Add" button
      navigation={navigation} // Pass the navigation prop
    />
  );
}
