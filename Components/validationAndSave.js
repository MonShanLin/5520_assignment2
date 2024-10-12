import { Alert } from 'react-native';

export function validateAndSave(formData, date, setEntries, entriesType, navigation) {
  // Validation
  if (!formData || Object.values(formData).some((value) => !value) || !date) {
    Alert.alert('Invalid input', 'Please complete all the fields.');
    return false;
  }
  
  // Handle numeric fields
  const numericField = Object.values(formData).find(value => isNaN(value));
  if (numericField && numericField <= 0) {
    Alert.alert('Invalid input', 'Numeric fields must be positive numbers.');
    return false;
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
