import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Import FontAwesome5
import Diet from './Screens/Diet';
import Activities from './Screens/Activities';
import { DataProvider } from './Context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
