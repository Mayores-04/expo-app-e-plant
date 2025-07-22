//Top Navigation

// import HomeScreen from 'app/(tabs)/HomeScreen';
// import ProfileScreen from 'app/(tabs)/ProfileScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Tab = createMaterialTopTabNavigator();

// const AppNavigator = () => {
//   return (
//     <SafeAreaView className='flex-1'>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarLabel: ({ focused, color     }) => {
//             let iconName: string = 'help';
//             if (route.name == 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name == 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             } else {
//               iconName = 'help-circle-outline';
//             }
//             return <Ionicons name={iconName} color={color} size={20} />;
//           },
//           tabBarActiveTintColor: '#006400',
//           tabBarInactiveTintColor: 'green',
//           swipeEnabled: false
//         })}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// export default AppNavigator;

//Bottom Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'app/(tabs)/HomeScreen';
import ProfileScreen from 'app/(tabs)/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from 'components/CustomHeader';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <>
      <CustomHeader />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'help';
            if (route.name == 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name == 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'help-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: 'green',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigator;
