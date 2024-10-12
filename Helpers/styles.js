import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#ceb9ed', // The purple background color of the app
    padding: 10, // Padding around the content
  },

  // Item styles
  itemContainer: {
    backgroundColor: '#4E4376', // Background color
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'column', // Ensures content is stacked
  },
  itemName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5, // Adds some space between name and details
  },
  itemDetailsContainer: {
    flexDirection: 'row', // Aligns date and details horizontally
    alignItems: 'center', // Centers items vertically
    justifyContent: 'space-between', // Distributes space between elements
  },
  itemDate: {
    fontSize: 14,
    color: '#FFD700', // Golden color for the date
    marginRight: 10,
  },
  itemDetails: {
    fontSize: 16,
    color: 'white',
  },
  warningIcon: {
    marginRight: 5,
  },

  // Header styles
  headerStyle: {
    backgroundColor: '#4E4376', // Purple background
  },
  headerTintColor: {
    color: 'white', // White text color for the header
  },

   // Tab bar styles
  tabBarActiveTintColor: {
    color: '#FFD700', // Gold color for active icons
  },
  tabBarInactiveTintColor: {
    color: 'gray', // Gray color for inactive icons
  },


  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdown: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
