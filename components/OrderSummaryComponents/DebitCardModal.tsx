import { View, Text, Modal, Pressable, TextInput } from 'react-native';
import React from 'react';

const DebitCardModal = ({
  isDebitCard,
  setIsDebitCard,
  cardNumber,
  setCardNumber,
  expirationDate,
  setExpirationDate,
  securityCode,
  setSecurityCode,
  cardholderName,
  setCardholderName,
  handleSubmitCardInfo,
}: {
  isDebitCard: boolean;
  setIsDebitCard: (value: boolean) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  expirationDate: string;
  setExpirationDate: (value: string) => void;
  securityCode: string;
  setSecurityCode: (value: string) => void;
  cardholderName: string;
  setCardholderName: (value: string) => void;
  handleSubmitCardInfo: () => void;
}) => {
  return (
    <Modal
      visible={isDebitCard}
      animationType="fade"
      backdropColor="bg-black/50"
      onRequestClose={() => setIsDebitCard(false)}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="w-[90%] rounded-xl bg-white p-5">
          <Text className="mb-4 text-center text-xl font-bold">Enter Card Details</Text>

          {/* Card Number */}
          <View className="mb-3">
            <Text className="mb-1 text-gray-700">Card Number</Text>
            <TextInput
              className="rounded-md border p-3 text-black"
              value={cardNumber}
              onChangeText={setCardNumber}
              placeholder="1234 5678 9012 3456"
              placeholderTextColor="#9E9E9E"
              keyboardType="numeric"
              maxLength={19}
            />
          </View>

          {/* Expiration and Security Code */}
          <View className="mb-3 flex-row justify-between gap-3">
            <View className="flex-1">
              <Text className="mb-1 text-gray-700">Expiration Date</Text>
              <TextInput
                className="rounded-md border p-3 text-black"
                value={expirationDate}
                onChangeText={setExpirationDate}
                placeholder="MM/YY"
                keyboardType="numeric"
                placeholderTextColor="#9E9E9E"
                maxLength={5}
              />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-gray-700">Security Code</Text>
              <TextInput
                className="rounded-md border p-3 text-black"
                value={securityCode}
                onChangeText={setSecurityCode}
                placeholder="CVV"
                placeholderTextColor="#9E9E9E"
                keyboardType="numeric"
                maxLength={4}
                secureTextEntry
              />
            </View>
          </View>

          {/* Cardholder Name */}
          <View className="mb-5">
            <Text className="mb-1 text-gray-700">Cardholder Name</Text>
            <TextInput
              className="rounded-md border p-3 text-black"
              value={cardholderName}
              placeholderTextColor="#9E9E9E"
              onChangeText={setCardholderName}
              placeholder="e.g., Juan Dela Cruz"
            />
          </View>

          {/* Buttons */}
          <View className="flex-row justify-end gap-3">
            <Pressable
              className="rounded-md bg-gray-300 px-4 py-2"
              onPress={() => setIsDebitCard(false)}>
              <Text className="text-black">Cancel</Text>
            </Pressable>
            <Pressable className="rounded-md bg-green-600 px-4 py-2" onPress={handleSubmitCardInfo}>
              <Text className="text-white">Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DebitCardModal;
