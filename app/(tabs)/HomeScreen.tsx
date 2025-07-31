import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Plant, plants } from 'StaticData/Plants';
import { Tool, tools } from 'StaticData/Tools';
// import Toast from 'react-native-toast-message';

const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 65) / 2;

type GroupedHeader = {
  type: 'header';
  title: string;
};

type GroupedItem = {
  type: 'item';
  data: Product;
};

type Product = Plant | Tool;

type GroupedRow = GroupedHeader | GroupedItem;

const Item = ({ item }: { item: Product }) => {
  const [quantity, setQuantity] = useState(0);
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };
  const addToCart = () => {
    router.replace('(tabs)/(cart-tabs)/CartScreen');
    console.log(
      `Add to Cart\nItem Name: ${item.name}\nItem Price: ${item.price}\nTotal: ${item.price * quantity}`
    );
  };

  const buyItem = () => {
    const finalQuantity = quantity === 0 ? 1 : quantity;
    console.log(finalQuantity);
    console.log(
      `Buy \nItem Name: ${item.name}\nItem Price: ${item.price}\nTotal: ${item.price * quantity}`
    );
    router.push({
      pathname: '(tabs)/[OrderSummary]',
      params: {
        id: item.id.toString(),
        quantity: finalQuantity.toString(),
        item: JSON.stringify(item),
      },
    });
  };
  return (
    <View
      className="m-2 rounded-lg bg-white p-3 shadow-md shadow-black"
      style={{
        width: itemWidth,
        elevation: 5,
      }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', aspectRatio: 1, borderRadius: 10 }}
        resizeMode="contain"
      />
      <Text className="mt-2 text-base font-bold">{item.name}</Text>
      <Text className="text-xs text-gray-600" numberOfLines={2}>
        {item.description}
      </Text>
      <Text className="mt-1 font-semibold text-green-700">₱{item.price.toFixed(2)}</Text>

      {/*  */}
      <View className="flex-row items-center justify-center px-2 ">
        {/* Minus Button */}
        <Pressable
          className="h-7 w-7 items-center justify-center rounded-full bg-gray-400"
          onPress={decreaseQuantity}>
          <Text className="text-lg text-white">-</Text>
        </Pressable>

        <Text className="px-1 text-black">{quantity}</Text>

        <Pressable
          className="h-7 w-7 items-center justify-center rounded-full bg-gray-400"
          onPress={addQuantity}>
          <Text className="text-lg text-white">+</Text>
        </Pressable>

        {/* Cart Button */}
        <TouchableOpacity
          className="mx-1 items-center justify-center rounded-full"
          onPress={addToCart}>
          <Ionicons name="cart-outline" size={20} color="black" />
        </TouchableOpacity>

        {/* Buy Button */}
        <TouchableOpacity
          className="mx-1 rounded-full bg-[#282A37] px-2 py-1"
          onPress={buyItem}
          activeOpacity={0.6}>
          <Text className="text-white">Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  //I used AI to help me with this
  const groupedAllData: GroupedRow[] = [
    { type: 'header', title: 'Plants' } as GroupedHeader,
    ...plants.map((p) => ({ type: 'item', data: p }) as GroupedItem),
    { type: 'header', title: 'Tools' } as GroupedHeader,
    ...tools.map((t) => ({ type: 'item', data: t }) as GroupedItem),
  ];

  const onSaleProducts: GroupedItem[] = [
    ...plants.filter((p) => p.onSale).map((p) => ({ type: 'item', data: p, discountedPrice: parseFloat((p.price * 0.8).toFixed(2)) }) as GroupedItem),
    ...tools.filter((t) => t.onSale).map((t) => ({ type: 'item', data: t, discountedPrice: parseFloat((t.price * 0.8).toFixed(2)) }) as GroupedItem),
  ];

  const ItemGroups: {
    label: string;
    data: GroupedRow[];
    isGrouped: boolean;
  }[] = [
    {
      label: 'All Products',
      data: groupedAllData,
      isGrouped: true,
    },
    {
      label: '20% Off',
      data: onSaleProducts,
      isGrouped: false,
    },
    {
      label: 'Tools',
      data: tools.map((t) => ({ type: 'item', data: t })),
      isGrouped: false,
    },
  ];

  const currentGroup = ItemGroups[selectedGroupIndex];

  return (
    <View className="w-full flex-1 items-center bg-[#B0CEB9] p-2 px-5">
      {/* Group Selection Buttons */}
      <View className="flex w-full flex-row justify-between p-2">
        {ItemGroups.map((group, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedGroupIndex(index)}
            className={`rounded-lg border px-5 py-3 shadow-md shadow-black ${
              selectedGroupIndex === index ? 'bg-green-300' : 'bg-[#E6E6E6]'
            }`}
            style={{ elevation: 5 }}
            activeOpacity={0.6}>
            <Text>{group.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Items List : I used AI to help me with this*/}
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">
        <View className="flex flex-row flex-wrap justify-between">
          {currentGroup.data.map((item, index) => {
            if (item.type === 'header') {
              if (item.title === 'Plants') return null;

              return (
                <Text
                  key={`header-${index}`}
                  className="mb-2 mt-4 w-full rounded-lg bg-[#E6E6E6] p-3 text-center text-3xl font-bold text-gray-800">
                  E-Plant {item.title}
                </Text>
              );
            }

            return <Item key={`item-${item.data.id}-${index}`} item={item.data} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
