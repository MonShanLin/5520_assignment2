import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDataContext } from '../Context'; // Use context to update data
import Form from '../Components/Form'; // Reusable form component

export default function AddActivity({ navigation }) {
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

  // Handle saving the activity
  const handleSave = () => {
    if (!activityType || !duration || !date) {
      Alert.alert('Invalid input', 'Please complete all the fields.');
      return;
    }
    if (isNaN(duration) || duration <= 0) {
      Alert.alert('Invalid input', 'Duration must be a positive number.');
      return;
    }

    // Update the activities in the context
    setEntries((prevEntries) => ({
      ...prevEntries,
      activities: [
        ...prevEntries.activities,
        {
          id: prevEntries.activities.length + 1, // Incremental ID
          name: activityType,
          duration: `${duration} min`,
          date: date.toDateString(),
        },
      ],
    }));

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

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

  return (
    <Form
      formFields={formFields}
      date={date}
      setDate={setDate}
      showDatePicker={showDatePicker}
      setShowDatePicker={setShowDatePicker}
      handleSave={handleSave}
      handleCancel={handleCancel}
    />
  );
}