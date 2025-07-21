import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from 'app/(cart-tabs)/CartScreen';
import ArchiveScreen from 'app/(cart-tabs)/ArchiveScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from 'components/CustomHeader';

const Tab = createBottomTabNavigator();

const CartNavigator = () => {
  return (
    <>
      <CustomHeader />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'help';
            if (route.name == 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name == 'Archive') {
              iconName = focused ? 'archive' : 'archive-outline';
            } else {
              iconName = 'help-circle-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: 'green',
        })}>
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Archive" component={ArchiveScreen} />
      </Tab.Navigator>
    </>
  );
};

export default CartNavigator;
