import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDataContext } from '../Context';
import Form from '../Components/Form';

export default function AddDiet({ navigation }) {
  const { entries, setEntries } = useDataContext();
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (!description || !calories || !date) {
      Alert.alert('Invalid input', 'Please complete all the fields.');
      return;
    }
    if (isNaN(calories) || calories <= 0) {
      Alert.alert('Invalid input', 'Calories must be a positive number.');
      return;
    }

    setEntries((prevEntries) => ({
      ...prevEntries,
      diet: [
        ...prevEntries.diet,
        {
          id: prevEntries.diet.length + 1,
          name: description,
          calories: `${calories}`,
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
      label: 'Description',
      value: description,
      onChange: setDescription,
    },
    {
      label: 'Calories',
      value: calories,
      onChange: setCalories,
      keyboardType: 'numeric',
    },
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
