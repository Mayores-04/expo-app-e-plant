import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="p-4 text-5xl text-green-800">E-Plant</Text>

      <Pressable onPress={() => router.push('/Login')} className="rounded-full bg-green-400 p-4">
        <Text className="font-bold text-white">Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
