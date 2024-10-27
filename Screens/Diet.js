import React from 'react';
import ListScreen from '../Components/ListScreen';
import { useThemeStyles } from '../Components/useThemeStyles'; 

export default function DietScreen({ navigation }) {
    const { backgroundColor, textColor } = useThemeStyles(); 
    
    return (
    <ListScreen
      type="diet" // Pass the type as "diet"
      addScreenName="AddDiet" // Pass the screen name for the "Add" button
      navigation={navigation} // Pass the navigation prop
      backgroundColor={backgroundColor} // Pass the background color
      textColor={textColor} // Pass the text color
    />
  );
}
