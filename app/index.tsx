import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
        <Text className='text-5xl p-4 text-green-800'>E-Plant</Text>

      <Pressable
        onPress={() => router.push('/Login')}
        className='bg-green-400 p-4 rounded-full'
      > 
        <Text className='text-white font-bold'>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
