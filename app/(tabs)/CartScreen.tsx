import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  return (
    <View className='flex-1 items-center justify-center bg-green-200 '>
      <Text>🛒 This is the Cart Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
