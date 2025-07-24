import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-200">
      <Pressable
        className='bg-green-400 p-4 rounded-full'
        // onPress={() => router.push("/(navigation)/HomeNavigator")}
        onPress={() => router.push("/(tabs)/HomeScreen")}
      >
        <Text>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
