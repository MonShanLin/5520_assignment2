import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#4E4376', 
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'column', 
  },
  itemName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5, 
  },
  itemDetailsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  itemDate: {
    fontSize: 14,
    color: '#FFD700', 
    marginRight: 10,
  },
  itemDetails: {
    fontSize: 16,
    color: 'white',
  },
  warningIcon: {
    marginRight: 5,
  },
});
