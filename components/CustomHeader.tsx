import { View, Text, Pressable, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, usePathname } from 'expo-router';

const CustomHeader = () => {
  const pathnames = [
    {
      toGo: '(navigation)/CartNavigator',
      name: 'Cart',
    },
    {
      toGo: '(tabs)/HelpCenterScreen',
      name: 'Help',
    },
  ];

  const currentPath = usePathname();

  return (
    <SafeAreaView className="flex w-full flex-row gap-4 p-2">
      {pathnames.map((item, index) => {
        const isActive = currentPath.includes(item.toGo);
        return (
          <TouchableHighlight
            key={index}
            className="rounded-full bg-green-400 p-4"
            activeOpacity={0.6}
            underlayColor={isActive ? '#fca5a5' : '#bbf7de'}
            onPress={() => router.push(`/${item.toGo}`)}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
        );
      })}

      <Pressable className='items-center justify-center'
        onPress={() => router.push("(navigation)/HomeNavigator")}
      >
        <Text className='text-Black font-bold text-4xl'>E-Plant</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CustomHeader;
