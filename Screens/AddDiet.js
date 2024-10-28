import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDataContext } from '../Context';
import Form from '../Components/Form';
import { validateAndSave } from '../Components/validationAndSave';
import { useThemeStyles } from '../Components/useThemeStyles';
import { writeToDB } from '../Firebase/firestoreHelper';

export default function AddDiet({ navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();

  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const handleSave = () => {
    const formData = {
      name: description,
      calories: `${calories}`,
      date: date.toISOString()
    };

    writeToDB(formData, 'diet')
      .then(() => {
        console.log('Diet entry added!');
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
