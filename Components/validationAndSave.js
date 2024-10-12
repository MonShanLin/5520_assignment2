import { Alert } from 'react-native';

export function validateAndSave(formData, date, setEntries, entriesType, navigation) {
    // Validation for empty fields
    if (!formData || Object.values(formData).some((value) => value === '' || value === null) || !date) {
      Alert.alert('Invalid input', 'Please complete all the fields.');
      return false;
    }
  
    // Regular expression to check if the input is a valid positive integer
    const isPositiveInteger = (value) => /^\d+$/.test(value);

    // Validation for duration field
    if ('duration' in formData) {
        if (!isPositiveInteger(formData.duration)) {
            Alert.alert('Invalid input', 'Duration must be a valid positive number.');
            return false;
        }
        formData.duration = parseInt(formData.duration, 10); 
    }

    // Validation for calories field
    if ('calories' in formData) {
        if (!isPositiveInteger(formData.calories)) {
            Alert.alert('Invalid input', 'Calories must be a valid positive number.');
            return false;
        }
        formData.calories = parseInt(formData.calories, 10); 
    }


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

  navigation.goBack();
  return true;
}
