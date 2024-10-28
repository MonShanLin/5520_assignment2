import React, { useState, useEffect } from 'react';
import { Alert, View, Pressable, Text, ActivityIndicator } from 'react-native';
import Form from '../Components/Form';
import { useThemeStyles } from '../Components/useThemeStyles';
import { fetchFromDB, updateDB, deleteFromDB } from '../Firebase/firestoreHelper';
import { Ionicons } from '@expo/vector-icons';

export default function EditActivity({ route, navigation }) {
  const { backgroundColor, textColor } = useThemeStyles();
  const { id } = route.params;  // Passed entry ID

  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(true);  // Loading state for data fetching
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

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const data = await fetchFromDB(id, 'activities');
        setActivityType(data.name);
        setDuration(data.duration.replace(' min', ''));
        setDate(new Date(data.date));
        setLoading(false);  // Stop loading after fetching
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch activity data.');
        setLoading(false);  // Stop loading even in case of error
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

    try {
      await updateDB(id, formData, 'activities');
      Alert.alert('Success', 'Activity updated successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update activity.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFromDB(id, 'activities');
      Alert.alert('Success', 'Activity deleted successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete activity.');
    }
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
    {
      label: 'Duration (min)',
      value: duration,
      onChange: setDuration,
      keyboardType: 'numeric',
    },
  ];

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ color: textColor, marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

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
