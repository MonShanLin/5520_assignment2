import { Alert } from 'react-native';

export function validateAndSave(formData, date, setEntries, entriesType, navigation) {
    // Validation for empty fields
    if (!formData || Object.values(formData).some((value) => value === '' || value === null) || !date) {
      Alert.alert('Invalid input', 'Please complete all the fields.');
      return false;
    }
  
  // Validation for numeric fields
  if ('duration' in formData) {
    const duration = parseInt(formData.duration, 10);
    if (isNaN(duration) || duration <= 0) {
      Alert.alert('Invalid input', 'Duration must be a positive number.');
      return false;
    }
    formData.duration = duration; // Ensure duration is stored as a number
  }

  if ('calories' in formData) {
    const calories = parseInt(formData.calories, 10);
    if (isNaN(calories) || calories <= 0) {
      Alert.alert('Invalid input', 'Calories must be a positive number.');
      return false;
    }
    formData.calories = calories; // Ensure calories are stored as a number
  }


  // Save data
  setEntries((prevEntries) => ({
    ...prevEntries,
    [entriesType]: [
      ...prevEntries[entriesType],
      {
        id: prevEntries[entriesType].length + 1,
        ...formData,
        date: date.toDateString(),
      },
    ],
  }));

  // Go back after saving
  navigation.goBack();
  return true;
}
