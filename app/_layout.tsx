import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Toast from 'toastify-react-native'; //This has effects
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#81A48B" translucent={false} />
      <Stack screenOptions={{ headerShown: false }} />
      <Toast />
    </SafeAreaProvider>
  );
}
