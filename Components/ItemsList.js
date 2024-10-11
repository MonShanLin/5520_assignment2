import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDataContext } from '../Context';
import { styles } from '../Helpers/styles';

export default function ItemsList({ type }) {
  const { entries } = useDataContext();
  const data = type === 'diet' ? entries.diet : entries.activities;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
          <Text style={styles.itemDetails}>
            {type === 'diet' ? `${item.calories} cal` : item.duration}
          </Text>
        </View>
      )}
    />
  );
}
