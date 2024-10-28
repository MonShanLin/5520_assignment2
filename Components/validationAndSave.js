import { Alert } from 'react-native';
import { writeToDB } from '../Firebase/firestoreHelper'; // Firestore helper to save data

export async function validateAndSave(formData, date, collectionName, navigation) {
    // Validation for empty fields
    if (!formData || Object.values(formData).some(value => value === '' || value === null) || !date) {
        Alert.alert('Invalid input', 'Please complete all the fields.');
        return false;
    }

    // Validation for numeric fields like 'duration'
    if ('duration' in formData) {
        const duration = parseInt(formData.duration, 10);
        if (isNaN(duration) || duration <= 0) {
            Alert.alert('Invalid input', 'Duration must be a positive number.');
            return false;
        }
        formData.duration = duration; // Ensure duration is stored as a number
    }

    // Handle date format
    formData.date = date.toISOString();

    // Save the form data to Firestore
    try {
        writeToDB(formData, collectionName);
        return true;
    } catch (error) {
        Alert.alert('Error', 'Failed to save the data.');
        console.error('Error writing to Firestore:', error);
        return false;
    }
}
