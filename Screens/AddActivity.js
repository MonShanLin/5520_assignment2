import React, { useState } from 'react';
import { Pressable, Text, Alert } from 'react-native';
import Form from '../Components/Form';
import { validateAndSave } from '../Components/validationAndSave';
import { useThemeStyles } from '../Components/useThemeStyles';
import { database } from '../Firebase/firebaseSetup';

export default function AddActivity({ navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();

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
      date: date.toISOString()
    };

    database.collection('activities')
      .add(formData)
      .then(() => {
        console.log('Activity added!');
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
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