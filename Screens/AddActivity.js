import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDataContext } from '../Context'; // Use context to update data
import { styles } from '../Helpers/styles'; 

export default function AddActivity({ navigation }) {
  const { entries, setEntries } = useDataContext(); // Context to update the activities
  const [activityType, setActivityType] = useState(null);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Dropdown state
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
      Alert.alert('Invalid input', 'Please fill in all the fields.');
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

    // Go back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
      {/* Dropdown for activity type */}
      <Text style={styles.label}>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={items}
        setOpen={setOpen}
        setValue={setActivityType}
        setItems={setItems}
        placeholder="Select An Activity"
        containerStyle={styles.dropdown}
      />

      {/* Duration Input */}
      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        placeholder="Enter duration in minutes"
      />

      {/* Date Picker */}
      <Text style={styles.label}>Date *</Text>
      <TextInput
        style={styles.input}
        value={date.toDateString()}
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} color="gray" />
        <Button title="Save" onPress={handleSave} color="#4E4376" />
      </View>
    </View>
  );
}
