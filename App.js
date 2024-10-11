import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; 
import Diet from './Screens/Diet';
import Activities from './Screens/Activities';
import { DataProvider } from './Context';
import { styles } from './Helpers/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: styles.headerStyle, // Styles for header
            headerTintColor: styles.headerTintColor.color, // White text in the header
            tabBarStyle: styles.tabBarStyle, // Styles for tab bar
            tabBarActiveTintColor: styles.tabBarActiveTintColor.color, // Active icon color
            tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color, // Inactive icon color
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Diet') {
                iconName = 'fast-food';
                return <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === 'Activities') {
                return <FontAwesome5 name="running" size={size} color={color} />;              }
            },
          })}
        >
          <Tab.Screen name="Activities" component={Activities} />
          <Tab.Screen name="Diet" component={Diet} />
          
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
