import React, { useState, useEffect } from 'react';
import { Alert, View, Pressable, Text } from 'react-native';
import Form from '../Components/Form';
import { useThemeStyles } from '../Components/useThemeStyles';
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import { Ionicons } from '@expo/vector-icons';

export default function EditActivity({ route, navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();
  const { id } = route.params;  // Passed entry ID

  const [activityType, setActivityType] = useState(null);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // Fetch the existing data from Firestore using the document ID
    const fetchEntry = async () => {
      const docRef = doc(database, 'activities', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setActivityType(data.name);
        setDuration(data.duration.replace(' min', ''));
        setDate(new Date(data.date));
      } else {
        Alert.alert('Error', 'No such document found');
      }
    };
    fetchEntry();
  }, [id]);

  const handleSave = async () => {
    const formData = {
      name: activityType,
      duration: `${duration} min`,
      date: date.toISOString(),
    };

    const docRef = doc(database, 'activities', id);
    try {
      await updateDoc(docRef, formData);
      Alert.alert('Success', 'Activity updated successfully!');
      navigation.goBack();  // Navigate back after saving
    } catch (error) {
      Alert.alert('Error', 'Failed to update activity.');
    }
  };

  const handleDelete = async () => {
    const docRef = doc(database, 'activities', id);
    try {
      await deleteDoc(docRef);
      Alert.alert('Success', 'Activity deleted successfully!');
      navigation.goBack();  // Navigate back after deletion
    } catch (error) {
      Alert.alert('Error', 'Failed to delete activity.');
    }
  };

  const formFields = [
    {
      label: 'Activity',
      value: activityType,
      onChange: setActivityType,
      dropdownOptions: [
        { label: 'Walking', value: 'Walking' },
        { label: 'Running', value: 'Running' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Weights', value: 'Weights' },
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Cycling', value: 'Cycling' },
        { label: 'Hiking', value: 'Hiking' },
      ],
      placeholder: 'Select An Activity',
    },
    {
      label: 'Duration (min)', 
      value: duration, 
      onChange: setDuration, 
      keyboardType: 'numeric'
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Trash Icon for Deleting */}
      <Pressable onPress={handleDelete} style={{ position: 'absolute', right: 20, top: 40 }}>
        <Ionicons name="trash" size={30} color="red" />
      </Pressable>

      {/* Edit Form */}
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
    </View>
  );
}
