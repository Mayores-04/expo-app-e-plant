import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileCard() {
  return (
    <View className="flex-1 items-center justify-start bg-green-200">
      {/* White Section */}
      <View className="absolute bottom-0 h-1/2 w-full rounded-t-3xl bg-white" />

      {/* Profile Image */}
      <View className="z-10 mt-20">
        <Image
          source={{ uri: 'http://bit.ly/46sAhsV' }}
          className="rounded-full border border-black"
          style={{ width: 150, height: 150 }}
        />
      </View>

      {/* Info */}
      <View className="z-20 w-11/12 items-start px-6 bg-[#EDEDED]">
        <Text className="text-lg font-bold">Name:</Text>
        <Text className="text-xl">Jake J. Mayores</Text>

        <Text className="mt-4 text-lg font-bold">Course:</Text>
        <Text className="text-xl">BSCS</Text>
      </View>
    </View>
  );
}
