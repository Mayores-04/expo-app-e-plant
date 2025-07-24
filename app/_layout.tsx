import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#81A48B" translucent={false} />
      <Stack screenOptions={{ headerShown: false }}/>
    </SafeAreaProvider>
  );
}
