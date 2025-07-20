import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-green-200">
      <Pressable
        className='bg-green-400 p-4 rounded-full'
        onPress={() => router.push("/(tabs)/CartScreen")}
      >
        <Text>Cart</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen