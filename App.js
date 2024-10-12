import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import DietScreen from './Screens/Diet';
import ActivitiesScreen from './Screens/Activities';
import SettingsScreen from './Screens/Settings';
import AddActivity from './Screens/AddActivity';
import AddDiet from './Screens/AddDiet';
import { ThemeProvider } from './Components/ThemeContext';
import { DataProvider } from './Context';
import { styles } from './Helpers/styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for the Activities Tab
function ActivitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivitiesScreen"
        component={ActivitiesScreen}
        options={{ title: 'Activities' }}
      />
      <Stack.Screen
        name="AddActivity"
        component={AddActivity}
        options={{ title: 'Add An Activity' }}
      />
    </Stack.Navigator>
  );
}

// Stack Navigator for the Diet Tab
function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DietScreen"
        component={DietScreen}
        options={{ title: 'Diet' }}
      />
      <Stack.Screen
        name="AddDiet"
        component={AddDiet}
        options={{ title: 'Add A Diet Entry' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <DataProvider>
        <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false, // Hide header
              headerStyle: styles.headerStyle, // Styles for header
              headerTintColor: styles.headerTintColor.color, // White text in the header
              tabBarStyle: styles.headerStyle, // Styles for tab bar
              tabBarActiveTintColor: styles.tabBarActiveTintColor.color, // Active icon color
              tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color, // Inactive icon color

              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Diet') {
                  iconName = 'fast-food';
                  return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === 'Activities') {
                  return (
                    <FontAwesome5 name="running" size={size} color={color} />
                  );
                } else if (route.name === 'Settings') {
                  return <AntDesign name="setting" size={size} color={color} />;
                }
              },
            })}
          >
            <Tab.Screen name="Activities" component={ActivitiesStack} />
            <Tab.Screen name="Diet" component={DietStack} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        </ThemeProvider>
      </DataProvider>
    
  );
}
