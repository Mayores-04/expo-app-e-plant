import { View, Text } from 'react-native';
import React from 'react';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { router, useRouter } from 'expo-router';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();

  const handleLogout = () => {
    //Add logic for real logout
    router.replace('/Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingVertical: 10, gap: 12 }}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({ size, color }) => <Ionicons name="log-out-outline" size={size} color={color} />}
          onPress={handleLogout}
          activeBackgroundColor="#2C2C2C"
          activeTintColor="#C5C5C5"
          inactiveBackgroundColor="#f87171"
          labelStyle={{ color: '#000000' }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const AppNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#2C2C2C',
          drawerInactiveBackgroundColor: '#686666',
          drawerActiveTintColor: '#C5C5C5',
          drawerInactiveTintColor: '#000000',
          drawerStyle: {
            backgroundColor: '#C5C5C5',
          },
        }}>
        <Drawer.Screen
          name="HomeScreen"
          options={{
            headerTitle: 'E-Plant',
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ProfileScreen"
          options={{
            headerTitle: 'Profile',
            drawerLabel: 'Profile',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="HelpCenterScreen"
          options={{
            headerTitle: 'Help',
            drawerLabel: 'Help',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="(cart-tabs)/CartScreen"
          options={{
            headerTitle: 'Cart',
            drawerLabel: 'Cart',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(cart-tabs)/ArchiveScreen"
          options={{
            headerTitle: 'Archive',
            drawerLabel: 'Archive',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="archive-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="[OrderSummary]/index"
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: () => null,
            drawerIcon: () => null,
            headerTitle: 'Order Summary',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AppNavigator;
