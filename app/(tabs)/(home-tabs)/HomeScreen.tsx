import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">HomeScreen</Text>

      <Pressable onPress={() => setModalVisible(true)} className="mt-4 rounded bg-blue-500 p-2">
        <Text className="text-black">Open Modal</Text>
      </Pressable>
      <Modal
        isVisible={modalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0}
        useNativeDriver={true}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center">
          <View className="w-[250px] items-center rounded-xl bg-white p-5">
            <Text className="mb-4 text-lg font-semibold">Logout?</Text>

            <Pressable
              onPress={() => setModalVisible(false)}
              className="rounded bg-red-500 px-4 py-2">
              <Text className="text-white">Yes, Logout</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)} className="mt-2">
              <Text className="text-blue-500">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
