import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
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

    // Go back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
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

      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={(text) => setDuration(text)}
      />

      <Text style={styles.label}>Date *</Text>
      <TouchableOpacity 
        onPress={() => setShowDatePicker(true)}
        style={styles.dateContainer}
        >
        <TextInput
          style={styles.input}
          value={date.toDateString()}
          editable={false}
          pointerEvents="none" // Disable interaction with the TextInput itself
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="inline" // Use inline display for the calendar view
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
            setShowDatePicker(false); // Hide picker after selection
          }}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} color="blue" />
        <Button title="Save" onPress={handleSave} color="blue" />
      </View>
    </View>
  );
}
