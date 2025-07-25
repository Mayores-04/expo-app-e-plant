import { Link, router, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Plant } from 'StaticData/Plants';
import { Tool } from 'StaticData/Tools';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import DebitCardModal from 'components/OrderSummaryComponents/DebitCardModal';
import PaymentOtherOptionsModal from 'components/OrderSummaryComponents/PaymentOtherOptionsModal';

type Product = Plant | Tool;

const OrderSummary = () => {
  const { item, quantity } = useLocalSearchParams();
  const parsedQuantity = Number(quantity || 0);

  if (!item) return <Text>Loading...</Text>;

  let parsedItem: Product;
  try {
    parsedItem = JSON.parse(item as string);
  } catch (e) {
    return <Text>Invalid item data</Text>;
  }
  const [newquantity, setNewQuantity] = useState(parsedQuantity);

  useEffect(() => {
    setNewQuantity(parsedQuantity);
  }, [item, quantity]);
  const addQuantity = () => {
    setNewQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setNewQuantity((prev) => Math.max(1, prev - 1));
  };

  const totalPrice = parsedItem.price * newquantity;

  const [isShowProductSubtotal, setShowProductSubtotal] = useState(true);
  const [isShowShippingSubtotal, setShowShippingSubtotal] = useState(true);

  const toggleShowProductSubtotal = () => {
    setShowProductSubtotal((prev) => !prev);
  };
  const toggleShowShippingSubtotal = () => {
    setShowShippingSubtotal((prev) => !prev);
  };

  const [isPaymentMethod, setIsPaymentMethod] = useState('COD');
  const [isDebitCard, setIsDebitCard] = useState(false);
  const [isOtherOptions, setShowOtherOptions] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const paymentType = ['Cash on Delivery (COD)', 'E-Plant PayLater'];

  const handleSubmitCardInfo = () => {
    console.log(`${cardNumber}\n${expirationDate}\n${securityCode}\n${cardholderName}`);
    setIsDebitCard(false);
  };

  const handleSelectPayment = (method: string) => {
    if (method === 'Add Credit / Debit Card') {
      setIsPaymentMethod('Debit Card');
      setIsDebitCard(true);
    } else {
      setIsPaymentMethod(method);
    }

    setShowOtherOptions(false);
  };

  const handleBuyItem = () => {
    const orderData = {
      customer: {
        name: 'Static Name',
        phone: '(+63)97********',
        address: '123, ST. GEGE, Barangay GEGEGE, Philippines',
      },
      product: {
        name: parsedItem.name,
        description: parsedItem.description,
        price: parsedItem.price,
        quantity: newquantity,
        total: totalPrice.toFixed(2),
      },
      payment: {
        method: isPaymentMethod,
        ...(isPaymentMethod === 'Debit Card' && {
          cardDetails: {
            cardNumber,
            expirationDate,
            securityCode,
            cardholderName,
          },
        }),
      },
      shipping: {
        estimated: 'Jul 26-31',
        fee: 0,
      },
    };

    console.log('Order Summary:', JSON.stringify(orderData, null, 2));
  };

  return (
    <ScrollView className="bg-white">
      {/* Location */}
      <View className=" p-3">
        <View className="flex-row">
          <Text className="font-bold">Static Name </Text>
          <Text className="font-semibold">(+63)97********</Text>
        </View>
        <Text>Address: 123, ST. GEGE, Barangay GEGEGE, Philippines</Text>
      </View>

      <View className="mx-auto my-4 h-1 w-full rounded-sm bg-gray-100 md:my-10 dark:bg-gray-700" />

      {/* Product Details */}
      <View className="flex-row gap-4  p-3">
        <Image
          source={{ uri: parsedItem.image }}
          style={{
            width: '35%',
            aspectRatio: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode="cover"
        />

        <View className="flex-1 justify-center">
          <Text className="text-xl font-bold" numberOfLines={2}>
            {parsedItem.name}
          </Text>
          <Text className="mt-1 text-gray-700" numberOfLines={3}>
            {parsedItem.description}
          </Text>
          <View className="mt-2 flex-row items-center justify-between">
            <Text className="mt-2 text-xl font-semibold text-green-700">
              ₱{parsedItem.price.toFixed(2)}
            </Text>
            <View className="flex-row">
              <Pressable
                className="h-7 w-7 items-center justify-center rounded-full bg-gray-400"
                onPress={decreaseQuantity}>
                <Text className="text-lg text-white">-</Text>
              </Pressable>

              <Text className="px-3 text-base text-black">{newquantity}</Text>

              <Pressable
                className="h-7 w-7 items-center justify-center rounded-full bg-gray-400"
                onPress={addQuantity}>
                <Text className="text-lg text-white">+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Date to Get */}
      <View className="flex-row justify-between bg-green-100 p-3">
        <View className="flex-col">
          <Text className="font-bold text-black">Get by Jul 26-31</Text>
          <Text className="text-black">Standard shipping</Text>
        </View>
        <View className="flex-row gap-1">
          <Text className="text-gray-800 line-through opacity-50">₱30.00</Text>
          <Text className="text-blue-700">Free</Text>
        </View>
      </View>

      {/* Order summary */}
      <View className="gap-3 p-3">
        <Text className="py-2 text-2xl font-bold">Order summary</Text>
        <View className="">
          <View className="flex-row justify-between">
            <Pressable
              className="flex-row items-center gap-3 py-2"
              onPress={toggleShowProductSubtotal}>
              <Text className="text-xl  font-semibold">Product subtotal</Text>
              <Ionicons
                name={`${isShowProductSubtotal ? 'arrow-up-outline' : 'arrow-down-outline'}`}
                size={20}
                color="gray"
              />
            </Pressable>
            <Text className="text-xl  font-semibold">₱30.00</Text>
          </View>
          {isShowProductSubtotal && (
            <View className="flex-col gap-2">
              <View className="flex-row justify-between">
                <Text>Original price</Text>
                <Text>₱30.00</Text>
              </View>
              <View className="flex-row justify-between">
                <Text>Product discount</Text>
                <Text>₱30.00</Text>
              </View>
              <View className="flex-row justify-between">
                <Text>Tiktok Shop coupons</Text>
                <Text>₱30.00</Text>
              </View>
            </View>
          )}
        </View>
        <View>
          <View className="flex-row justify-between">
            <Pressable
              className="flex-row items-center gap-3 py-2"
              onPress={toggleShowShippingSubtotal}>
              <Text className="text-xl  font-semibold">Shipping subtotal</Text>
              <Ionicons
                name={`${isShowShippingSubtotal ? 'arrow-up-outline' : 'arrow-down-outline'}`}
                size={20}
                color="gray"
              />
            </Pressable>
            <Text className="text-xl font-semibold">₱30.00</Text>
          </View>
          {isShowShippingSubtotal && (
            <View className="flex-col gap-2">
              <View className="flex-row justify-between">
                <Text>Shipping fee</Text>
                <Text>₱30.00</Text>
              </View>
              <View className="flex-row justify-between">
                <Text>Shipping discount</Text>
                <Text>₱30.00</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="py-2">{/* Break */}</View>

      {/* Total Price */}
      <View className="w-full flex-row justify-between bg-green-100 p-3">
        <Text className="text-2xl font-bold ">Total Price:</Text>
        <Text className=" text-2xl font-bold ">₱{totalPrice.toFixed(2)}</Text>
      </View>

      {/* Payment Methods */}
      <View className="p-3">
        <View className="flex-row justify-between">
          <Text className="py-2 text-2xl font-bold">Payment method</Text>
        </View>
        {/* Payment Methods */}
        <View className="p-3">
          {paymentType.map((type) => (
            <View key={type} className="flex-row items-center justify-between py-1">
              <Text>{type}</Text>
              <RadioButton
                color="green"
                value={type}
                status={isPaymentMethod === type ? 'checked' : 'unchecked'}
                onPress={() => {
                  setIsPaymentMethod(type);
                }}
              />
            </View>
          ))}
          <Pressable
            className="flex-row items-center justify-between gap-3 py-2"
            onPress={() => {
              setIsDebitCard(true);
              setIsPaymentMethod('Debit Card');
            }}>
            <View className="flex-col gap-2">
              <Text>Add credit/debit Card</Text>
              <View className="flex-row">
                <Ionicons name="card-outline" size={20} color="gray" />
                <Ionicons name="card-outline" size={20} color="gray" />
                <Ionicons name="card-outline" size={20} color="gray" />
              </View>
            </View>
            <Ionicons name="arrow-forward-outline" size={20} color="gray" />
          </Pressable>
          <Pressable
            className="flex-row items-center justify-between gap-3 py-2"
            onPress={() => setShowOtherOptions(true)}>
            <View className="flex-row">
              <Ionicons name="card-outline" size={20} color="gray" />
              <Ionicons name="card-outline" size={20} color="gray" />
              <Ionicons name="card-outline" size={20} color="gray" />
            </View>

            <View className="flex-row gap-2">
              <Text className="text-xl font-semibold">View all options</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="gray" />
            </View>
          </Pressable>

          {/* If Debit Card is selected */}
          <DebitCardModal
            isDebitCard={isDebitCard}
            setIsDebitCard={setIsDebitCard}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
            cardholderName={cardholderName}
            setCardholderName={setCardholderName}
            handleSubmitCardInfo={handleSubmitCardInfo}
          />

          {/* View all other options */}
          <PaymentOtherOptionsModal
            visible={isOtherOptions}
            paymentOptions={paymentOptions}
            onClose={() => setShowOtherOptions(false)}
            onSelectOption={handleSelectPayment}
          />
        </View>
      </View>

      <Text className="bg-green-100 p-3 text-justify text-black">
        By placing an order, you agree to the{' '}
        <Link href="" className="font-bold">
          E-Plant Shop Terms of Use and Sale
        </Link>{' '}
        and acknowledge that you have read the
        <Link href="" className="font-bold">
          {' '}Privacy Policy.
        </Link>
      </Text>
      <View className="w-full items-center py-2">
        <View className="w-[90%] flex-row justify-between py-2">
          <Text className="text-xl font-bold">Total {parsedQuantity} item</Text>
          <Text className="text-xl font-semibold text-green-700">
            Total Price: ₱{totalPrice.toFixed(2)}
          </Text>
        </View>
        <View className="w-full items-center pb-2">
          <TouchableOpacity
            className="w-[90%] items-center rounded-xl bg-green-800 p-5 "
            onPress={handleBuyItem}
            activeOpacity={0.6}>
            <Text className="text-white">Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const paymentOptions = [
  'Cash on Delivery (COD)',
  'GCash',
  'E-Plant PayLater',
  'Online Banking',
  'Maya',
  'PayPal',
  'Add Credit / Debit Card',
];

export default OrderSummary;
