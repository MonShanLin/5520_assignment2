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
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row', // Aligns items horizontally
    justifyContent: 'space-between', // Distributes space between elements
    alignItems: 'center', // Aligns items vertically
  },

  itemName: {
    fontSize: 16,
    color: 'white',
    flex: 1, // Takes as much space as it can
  },

  itemDetailsContainer: {
    flexDirection: 'row', // Aligns date and details horizontally
    alignItems: 'center', // Aligns items at the bottom
  },

  itemInfo: {
    flexDirection: 'row', // Align warning icon and date horizontally
    alignItems: 'center',
    marginRight: 10,
  },

  itemDetails: {
    fontSize: 14,
    color: 'black',
  },

  warningIcon: {
    marginRight: 5,
  },

  box: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
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
    color: 'purple',
    fontSize: 16,
  },

  dateContainer: {
    borderRadius: 5,
    
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: 'black', 
    borderWidth: 1.5, 
    zIndex: 0,
  },

  dropdown: {
    height: 50,
    borderRadius: 5,
    zIndex: 0,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
