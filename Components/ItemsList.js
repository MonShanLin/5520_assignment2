import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Helpers/styles';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

export default function ItemsList({ type }) {
  const [data, setData] = useState([]);
  const navigation = useNavigation(); 


  useEffect(() => {
    // Fetch real-time updates from Firestore based on the "type" (activities or diet)
    const unsubscribe = onSnapshot(collection(database, type), (snapshot) => {
      const dataList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
    });

    // Clean up the Firestore listener on component unmount
    return () => unsubscribe();
  }, [type]);

    // Function to format the date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
      });
    };

    const isSpecialActivity = (item) => {
      if (type === 'diet') {
        // For diet, mark as special if calories exceed 800
        return parseInt(item.calories) > 800;
      } else {
        // For activities, mark as special if it's "Running" or "Weights" and duration > 60 minutes
        const duration = parseInt(item.duration);
        return (item.name === 'Running' || item.name === 'Weights') && duration > 60;
      }
    };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
<Pressable
  onPress={() =>
    navigation.navigate(type === 'diet' ? 'EditDiet' : 'EditActivity', { id: item.id })
  }
  style={styles.itemContainer}
>
  <Text style={styles.itemName}>{item.name}</Text>

  <View style={styles.itemDetailsContainer}>
    <View style={styles.itemInfo}>
      {(isSpecialActivity(item) || item.isSpecial) && (
        <Ionicons name="warning" size={20} color="#FFC107" style={styles.warningIcon} />
      )}

      <View style={styles.box}>
        <Text style={styles.itemDetails}>{formatDate(item.date)}</Text>
      </View>
    </View>

    <View style={styles.box}>
      <Text style={styles.itemDetails}>
        {type === 'diet' ? `${item.calories} cal` : item.duration}
      </Text>
    </View>
  </View>
</Pressable>
    )}
  />
);
}