import React, { useState, useEffect } from 'react';
import { Alert, View, Pressable, Text, CheckBox } from 'react-native';
import Form from '../Components/Form';
import { useThemeStyles } from '../Components/useThemeStyles';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import { Ionicons } from '@expo/vector-icons';

export default function EditDiet({ route, navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();
  const { id } = route.params;  // Passed entry ID

  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Adding delete button to header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleDeleteConfirm} style={{ marginRight: 15 }}>
          <Ionicons name="trash" size={20} color="white" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    // Fetch the existing data from Firestore using the document ID
    const fetchEntry = async () => {
      try {
        const docRef = doc(database, 'diet', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDescription(data.name);
          setCalories(data.calories);
          setDate(new Date(data.date));
        } else {
          Alert.alert('Error', 'No such document found');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch diet data.');
      }
    };
    fetchEntry();
  }, [id]);

  const handleSave = async () => {
    const formData = {
      name: description,
      calories: `${calories}`,
      date: date.toISOString(),
    };

    const docRef = doc(database, 'diet', id);
    try {
      updateDoc(docRef, formData);
      Alert.alert('Success', 'Diet entry updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }, // Navigate back after alert
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update diet entry.');
    }
  };

  const handleDelete = async () => {
    const docRef = doc(database, 'diet', id);
    try {
      deleteDoc(docRef);
      Alert.alert('Success', 'Diet entry deleted successfully!');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error', 'Failed to delete diet entry.');
    }
  };

  const handleSaveConfirm = () => {
    Alert.alert(
      'Important',
      'Are you sure you want to save these changes?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: handleSave },
      ],
    );
  };

  const handleDeleteConfirm = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this item?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: handleDelete },
      ],
    );
  };

  const formFields = [
    {
      label: 'Description',
      value: description,
      onChange: setDescription,
      placeholder: 'Enter Description',
    },
    { 
      label: 'Calories', 
      value: `${calories}`,
      onChange: setCalories, 
      keyboardType: 'numeric',
      placeholder: 'Enter Calories',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Edit Form */}
      <Form
        formFields={formFields}
        date={date}
        setDate={setDate}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        handleSave={handleSaveConfirm} 
        handleCancel={() => navigation.goBack()}
        backgroundColor={backgroundColor}  
        textColor={textColor} 
      />
    </View>
  );
}
