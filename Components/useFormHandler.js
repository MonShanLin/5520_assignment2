import { useState } from 'react';
import { Alert } from 'react-native';

export function useFormHandler(initialFields, onSave) {
  const [fields, setFields] = useState(initialFields);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (key, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [key]: value,
    }));
  };

  const handleSave = () => {
    for (let key in fields) {
      if (!fields[key]) {
        Alert.alert('Invalid input', 'Please complete all the fields.');
        return;
      }
    }

    // Validate the calories or duration field depending on the form type
    if ((fields.calories && isNaN(fields.calories)) || fields.calories <= 0) {
      Alert.alert('Invalid input', 'Calories must be a positive number.');
      return;
    }

    if ((fields.duration && isNaN(fields.duration)) || fields.duration <= 0) {
      Alert.alert('Invalid input', 'Duration must be a positive number.');
      return;
    }

    // Call the passed in save function
    onSave(fields, date);
  };

  return {
    fields,
    date,
    setDate,
    showDatePicker,
    setShowDatePicker,
    handleChange,
    handleSave,
  };
}
