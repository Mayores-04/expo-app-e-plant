import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from 'app/(tabs)/HomeScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from 'app/(tabs)/ProfileScreen';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
            let iconName: string = 'help'
            if(route.name == "Home"){
                iconName = focused ? "home" : "home-outline";
            } else if(route.name == "Profile"){
                iconName = focused ? "person" : "person-outline";
            } else{
                iconName = "help-circle-outline";
            }
            return <Ionicons name={iconName} color={color} size={size}/>
        },

        tabBarActiveTintColor: "#006400",
        tabBarInactiveTintColor: "green"
    })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default AppNavigator