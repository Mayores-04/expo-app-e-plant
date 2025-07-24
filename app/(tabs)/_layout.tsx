import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props}>
    <View style={{ paddingVertical: 10, gap: 12 }}>
      <DrawerItemList {...props} />
    </View>
  </DrawerContentScrollView>
);

const Layout = () => {
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
          name="(home-tabs)/HomeScreen"
          options={{
            headerTitle: 'E-Plant',
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(home-tabs)/ProfileScreen"
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
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
