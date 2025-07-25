import React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';

const PaymentOtherOptionsModal = ({
  visible,
  paymentOptions,
  onClose,
  onSelectOption,
}: {
  visible: boolean;
  paymentOptions: string[];
  onClose: () => void;
  onSelectOption: (method: string) => void;
}) => {
  return (
    <Modal
      backdropColor="bg-black/50"
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <View className="flex-1 justify-end ">
        <View className="rounded-t-2xl bg-white px-5 py-6">
          <Text className="mb-4 text-center text-lg font-bold">Select Payment Method</Text>

          {paymentOptions.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => onSelectOption(option)}
              className="mb-3 rounded-md border border-gray-300 px-4 py-3">
              <Text className="text-base text-gray-700">{option}</Text>
            </Pressable>
          ))}

          <Pressable onPress={onClose} className="mt-2 rounded-md bg-gray-300 px-4 py-3">
            <Text className="text-center text-black">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentOtherOptionsModal;
