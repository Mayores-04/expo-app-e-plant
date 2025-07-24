import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Plant, plants } from 'StaticData/Plants';
import { Tool, tools } from 'StaticData/Tools';

const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 65) / 2;

type Product = Plant | Tool;

const Item = ({ item }: { item: Product }) => (
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
    <Text className="mt-1 font-semibold text-green-700">${item.price.toFixed(2)}</Text>
  </View>
);

const HomeScreen = () => {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  const ItemGroups = [
    {
      label: 'All Plants',
      data: plants.filter((plant) => !plant.onSale),
    },
    {
      label: 'Sale Plants',
      data: plants.filter((plant) => plant.onSale),
    },
    {
      label: 'Tools',
      data: tools,
    },
  ];

  return (
    <View className="w-full flex-1 items-center bg-[#B0CEB9] p-2 px-5">
      {/*  */}
      <View className=" flex w-full flex-row justify-between p-2">
        {ItemGroups.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedGroupIndex(index)}
            className={`rounded-lg border px-5 py-3 shadow-md shadow-black ${
              selectedGroupIndex === index ? 'bg-green-300' : 'bg-[#E6E6E6]'
            }`}
            style={{ elevation: 5 }}
            activeOpacity={0.6}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Item List */}
      <FlatList
        data={ItemGroups[selectedGroupIndex].data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
        numColumns={2}
        contentContainerClassName="flex justify-between"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default HomeScreen;
