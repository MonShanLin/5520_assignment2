import React from 'react';
import ListScreen from '../Components/ListScreen';
import { useThemeStyles } from '../Components/useThemeStyles'; 

export default function ActivitiesScreen({ navigation }) {
    const { backgroundColor, textColor } = useThemeStyles(); 
    
    return (
    <ListScreen
      type="activities" // Pass the type as "activities"
      addScreenName="AddActivity" // Pass the screen name for the "Add" button
      navigation={navigation} // Pass the navigation prop
      backgroundColor={backgroundColor} // Pass the background color
      textColor={textColor} // Pass the text color
    />
  );
}
