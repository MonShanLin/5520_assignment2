import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDataContext } from '../Context'; // Use context to update data
import Form from '../Components/Form';
import { validateAndSave } from '../Components/validationAndSave';
import { useThemeStyles } from '../Components/useThemeStyles';

export default function AddActivity({ navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();

  const { entries, setEntries } = useDataContext(); // Context to update the activities
  const [activityType, setActivityType] = useState(null);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);

  const formFields = [
    {
      label: 'Activity',
      value: activityType,
      onChange: setActivityType,
      dropdownOptions: items,
      setOpen,
      open,
      setItems,
      placeholder: 'Select An Activity',
    },
    { label: 'Duration (min)', 
      value: duration, 
      onChange: setDuration, 
      keyboardType: 'numeric' },
  ];

  const handleSave = () => {
    const formData = {
      name: activityType,
      duration: `${duration} min`,
    };

    validateAndSave(formData, date, setEntries, 'activities', navigation);
  };

  return (
    <Form
      formFields={formFields}
      date={date}
      setDate={setDate}
      showDatePicker={showDatePicker}
      setShowDatePicker={setShowDatePicker}
      handleSave={handleSave}
      handleCancel={() => navigation.goBack()}
      backgroundColor={backgroundColor}  
      textColor={textColor} 
    />
  );
}