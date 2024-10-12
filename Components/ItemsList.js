import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { useDataContext } from '../Context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Helpers/styles';

export default function ItemsList({ type }) {
  const { entries } = useDataContext();
  const data = type === 'diet' ? entries.diet : entries.activities;

  const isSpecialActivity = (item) => {
    // Check if the activity type is "Running" or "Weight" and the duration is greater than 60 minutes
    const duration = parseInt(item.duration); // Convert duration to integer
    return (
      (item.name === 'Running' || item.name === 'Weights') && duration > 60
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>

          <View style={styles.itemDetailsContainer}>
            <View style={styles.itemInfo}>
                { isSpecialActivity(item) && (
                    <Ionicons name="warning" size={20} color="#FFC107" style={styles.warningIcon} />
                )}
              
            <View style={styles.box}>
                <Text style={styles.itemDetails}>{item.date}</Text>
              </View>
            </View>
            
            <View style={styles.box}>
              <Text style={styles.itemDetails}>
                {type === 'diet' ? `${item.calories} cal` : item.duration}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}