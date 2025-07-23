import { View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';
import React, { useState } from 'react';

interface PathItem {
  label: string;
  path: string;
}

interface Props {
  drawerAnimatedStyle: any;
  insets: { top: number };
  pathItems: PathItem[];
  pathname: string;
  closeDrawer: () => void;
}

const SlidingDrawer = ({
  drawerAnimatedStyle,
  insets,
  pathItems,
  pathname,
  closeDrawer,
}: Props) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      {/* Overlay */}
      <TouchableWithoutFeedback onPress={closeDrawer}>
        <View className="absolute inset-0 z-40 bg-black/50" />
      </TouchableWithoutFeedback>

      {/* Drawer */}
      <Animated.View
        style={[drawerAnimatedStyle, { top: insets.top + 84 }]}
        className="absolute bottom-0 left-0 top-0 z-50 w-[70%] bg-green-800 p-4">
        {pathItems.map((item, index) => {
          const isActive = pathname === `/${item.path}`;
          return (
            <Pressable
              key={index}
              onPress={() => {
                closeDrawer();
                router.push(`/${item.path}`);
              }}
              className={`mb-2 w-full rounded px-4 py-3 ${
                isActive ? 'bg-green-900' : 'bg-green-500'
              }`}>
              <Text className="text-xl font-bold text-white">{item.label}</Text>
            </Pressable>
          );
        })}

        {/* Logout Button */}
        <Pressable
          onPress={() => setShowLogoutModal(true)}
          className="mt-4 rounded bg-red-600 px-4 py-3">
          <Text className="text-center text-xl font-bold text-white">Logout</Text>
        </Pressable>
      </Animated.View>

      {showLogoutModal && (
        <View className="absolute inset-0 z-50 items-center justify-center bg-black/60">
          <View className="w-4/5 items-center rounded-xl bg-white p-6">
            <Text className="mb-2 text-lg font-bold">Confirm Logout</Text>
            <Text className="mb-5 text-center text-gray-600">
              Are you sure you want to log out?
            </Text>
            <View className="flex-row gap-4">
              <Pressable
                onPress={() => {
                  setShowLogoutModal(false);
                  // perform logout action here
                  router.replace('/Login'); // or wherever
                }}
                className="bg-red-600 px-5 py-2 rounded-md">
                <Text style={{ color: 'white' }}>Logout</Text>
              </Pressable>
              <Pressable
                onPress={() => setShowLogoutModal(false)}
                 className="bg-gray-500 px-5 py-2 rounded-md">
                <Text className="text-white">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default SlidingDrawer;
