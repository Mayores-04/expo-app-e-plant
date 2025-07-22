import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from '../components/CustomHeader';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}/>
    </SafeAreaProvider>
  );
}


// // (tabs)/_layout.tsx
// import { View, TouchableWithoutFeedback } from 'react-native';
// import { Slot } from 'expo-router';
// import { useState } from 'react';
// import SideBarButton from 'components/SideBarButton';
// import MenuBar from 'components/menuBar';
// import CustomHeader from 'components/CustomHeader';

// const Layout = () => {
//   const [isSideBarOpen, setSideBarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSideBarOpen(prev => !prev);
//   };

//   return (
//     <SafeAreaProvider className="flex-1 bg-white">
//       {/* Custom Header with toggle button */}
//       <CustomHeader toggleSidebar={toggleSidebar} />

//       {/* Sidebar overlay */}
//       {isSideBarOpen && (
//         <TouchableWithoutFeedback onPress={toggleSidebar}>
//           <View className="absolute top-0 left-0 right-0 bottom-0 z-50 bg-black/40">
//             <View className="w-[75%] h-full bg-white">
//               <MenuBar />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       )}

//       {/* Main content */}
//       <Slot />
//     </SafeAreaProvider>
//   );
// };

// export default Layout;
