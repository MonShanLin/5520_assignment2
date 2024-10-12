import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../Helpers/styles';

export default function Form({
  formFields, // Array of field objects [{ label, value, onChange, placeholder, keyboardType }]
  date,
  setDate,
  showDatePicker,
  setShowDatePicker,
  handleSave,
  handleCancel,
  saveText = "Save",
  cancelText = "Cancel"
}) {
  return (
    <View style={styles.screenContainer}>
      {formFields.map((field, index) => (
        <View key={index}>
          <Text style={styles.label}>{field.label} *</Text>
          {field.dropdownOptions ? (
            <DropDownPicker
              open={field.open}
              value={field.value}
              items={field.dropdownOptions}
              setOpen={field.setOpen}
              setValue={field.onChange}
              setItems={field.setItems}
              placeholder={field.placeholder}
              containerStyle={styles.dropdown}
            />
          ) : (
          <TextInput
            style={styles.input}
            keyboardType={field.keyboardType || 'default'}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={field.placeholder || ''}
          />
            )}
        </View>
      ))}

      {/* Date Input */}
      <Text style={styles.label}>Date *</Text>
      <TouchableOpacity 
        onPress={() => setShowDatePicker(true)}
        style={styles.dateContainer}
      >
        <TextInput
          style={styles.input}
          value={date.toDateString()}
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="inline"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
            setShowDatePicker(false); // Hide picker after selection
          }}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title={cancelText} onPress={handleCancel} color="blue" />
        <Button title={saveText} onPress={handleSave} color="blue" />
      </View>
    </View>
  );
}
