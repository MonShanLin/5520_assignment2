import React,{ useState }  from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
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
  backgroundColor, // Pass theme background color
  textColor, // Pass theme text color
  saveText = 'Save',
  cancelText = 'Cancel',
}) {
    const [isDatePicked, setIsDatePicked] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setIsDatePicked(true); 
      
        if (Platform.OS !== 'ios' || isDatePicked) {
          setShowDatePicker(false); 
        } else if (Platform.OS === 'ios') {
          setTimeout(() => setShowDatePicker(false), 250); // Delay to ensure the UI update after date selection
        }
      
        setIsDatePicked(false); 
      };
  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      {formFields.map((field, index) => (
        <View
          key={index}
          style={{ zIndex: field.open ? 500 : 1, marginBottom: 20 }}
        >
          <Text style={[styles.label, { color: textColor }]}>
            {field.label} *
          </Text>
          {field.dropdownOptions ? (
            <DropDownPicker
              open={field.open}
              value={field.value}
              items={field.dropdownOptions}
              setOpen={field.setOpen}
              setValue={field.onChange}
              setItems={field.setItems}
              placeholder={field.placeholder}
              containerStyle={[styles.dropdown]}
              style={{ backgroundColor: 'white' }}
              dropDownContainerStyle={{ backgroundColor: 'white' }}
              zIndex={1000}
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
      <Text style={[styles.label, { color: textColor }]}>Date *</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateContainer}
      >
        <View pointerEvents="none">
          <TextInput
            style={styles.input}
            value={date.toDateString()}
            editable={false}
          />
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <View style={{ width: '100%', maxHeight: 300, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
            <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline'  : 'default'}
            onChange={onChangeDate}
            style={{ width: '100%' }}
            />
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title={cancelText} onPress={handleCancel} color="blue" />
        <Button title={saveText} onPress={handleSave} color="blue" />
      </View>
    </View>
  );
}
