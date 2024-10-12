import React, { useState } from 'react';
import { View, TextInput, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Date({ value, onChange }) {
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === 'ios'); // Keep the picker open on iOS until "Done" is pressed
    onChange(currentDate);

    if (Platform.OS !== 'ios') {
      setShow(false); // Automatically close picker on Android after selection
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, backgroundColor: 'white' }}
        placeholder="Select Date"
        value={value ? value.toLocaleDateString() : ''}
        onFocus={showDatepicker} // Show date picker when the input is focused
      />
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(event, selectedDate) => {
            onDateChange(event, selectedDate);
            if (Platform.OS === 'ios') {
              setShow(false); // Close picker after selecting a date in iOS
            }
          }}
        />
      )}
      {Platform.OS === 'ios' && show && (
        <Button title="Done" onPress={() => setShow(false)} />
      )}
    </View>
  );
}
