import React from 'react';
import ListScreen from '../Components/ListScreen';

export default function ActivitiesScreen({ navigation }) {
  return (
    <ListScreen
      type="activities" // Pass the type as "activities"
      addScreenName="AddActivity" // Pass the screen name for the "Add" button
      navigation={navigation} // Pass the navigation prop
    />
  );
}
