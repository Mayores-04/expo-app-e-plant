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
