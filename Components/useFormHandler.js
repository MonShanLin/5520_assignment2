import { useState } from 'react';
import { Alert } from 'react-native';

export default function useFormHandler(initialFormData, entriesType, setEntries, navigation) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    // Validation
    if (!formData.name || !formData.value || !date) {
      Alert.alert('Invalid input', 'Please complete all the fields.');
      return;
    }
    if (isNaN(formData.value) || formData.value <= 0) {
      Alert.alert('Invalid input', 'The numeric field must be a positive number.');
      return;
    }

    // Update entries
    setEntries((prevEntries) => ({
      ...prevEntries,
      [entriesType]: [
        ...prevEntries[entriesType],
        {
          id: prevEntries[entriesType].length + 1,
          name: formData.name,
          value: `${formData.value}`,
          date: date.toDateString(),
        },
      ],
    }));

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return {
    formData,
    setFormData,
    handleFieldChange,
    date,
    setDate,
    showDatePicker,
    setShowDatePicker,
    handleSave,
    handleCancel,
  };
}
