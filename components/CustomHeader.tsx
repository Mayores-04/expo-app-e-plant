import { View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, usePathname } from 'expo-router';
import { useState } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const CustomHeader = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const pathname = usePathname();

  const toggleAnim = useSharedValue(0);

  const springConfig: WithSpringConfig = {
    mass: 1,
    velocity: 0,
    stiffness: 250,
    damping: 45,
  };

  const pathItems = [
    { label: 'Home', path: '(navigation)/HomeNavigator' },
    { label: 'Cart', path: '(navigation)/CartNavigator' },
    { label: 'Help', path: '(tabs)/HelpCenterScreen' },
  ];

  // Hamburger transforms
  const topLineTransform = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(toggleAnim.value, [0, 1], [0, 10]) },
      { translateY: interpolate(toggleAnim.value, [0, 1], [0, 10]) },
      { rotate: `${interpolate(toggleAnim.value, [0, 1], [0, -19])}deg` },
    ],
  }));

  const centerLineTransform = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(toggleAnim.value, [0, 1], [0, 80])}deg` }],
  }));

  const bottomLineTransform = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(toggleAnim.value, [0, 1], [0, -10]) },
      { translateY: interpolate(toggleAnim.value, [0, 1], [0, -10]) },
      { rotate: `${interpolate(toggleAnim.value, [0, 1], [0, -19])}deg` },
    ],
  }));

  const containerRotation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(toggleAnim.value, [0, 1], [0, -30])}deg` }],
  }));

  const drawerTranslateX = useSharedValue(-300);

  const toggleDrawer = () => {
    const willOpen = !isDrawerOpen;
    toggleAnim.value = withSpring(willOpen ? 1 : 0, springConfig);
    drawerTranslateX.value = withTiming(willOpen ? 0 : -300, { duration: 300 });

    if (willOpen) {
      setDrawerOpen(true);
    } else {
      setTimeout(() => setDrawerOpen(false), 300);
    }
  };

  const closeDrawer = () => {
    toggleAnim.value = withSpring(0, springConfig);
    drawerTranslateX.value = withTiming(-300, { duration: 300 });
    setTimeout(() => setDrawerOpen(false), 300);
  };

  // Slide animation for drawer
  const drawerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: drawerTranslateX.value }],
  }));

  return (
    <>
      {/* Header */}
      <SafeAreaView className="z-50 w-full flex-row items-center gap-8 bg-white p-2">
        {/* Animated Hamburger Button */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View className="z-50 h-20 w-20 items-center justify-center rounded-xl bg-white">
            <Animated.View
              style={containerRotation}
              className="relative h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 ">
              <Animated.View
                style={topLineTransform}
                className={`absolute left-4 top-4 h-1.5 w-5 rounded-full ${isDrawerOpen ? "bg-red-600" : "bg-green-600"}`}
              />
              <Animated.View
                style={centerLineTransform}
                className={`h-1.5 w-8 rounded-full ${isDrawerOpen ? "bg-red-600" : "bg-green-600"}`}
              />
              <Animated.View
                style={ bottomLineTransform }
                className={`absolute bottom-4 right-4 h-1.5 w-5 rounded-full  ${isDrawerOpen ? "bg-red-600" : "bg-green-600"}`}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>

        {/* Title */}
        <Pressable
          className="ml-2 items-center justify-center"
          onPress={() => router.push('(navigation)/HomeNavigator')}>
          <Text className="text-5xl font-bold text-green-800">E-Plant</Text>
        </Pressable>
      </SafeAreaView>

      {/* Drawer + Backdrop */}
      {isDrawerOpen && (
        <>
          {/* Dimmed Background */}
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View className="absolute inset-0 z-40 bg-black/50" />
          </TouchableWithoutFeedback>

          {/* Sliding Drawer */}
          <Animated.View
            style={drawerAnimatedStyle}
            className="absolute bottom-0 left-0 top-[125.8] z-50 w-[70%] bg-green-800 p-4 ">
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
                  <Text className="font-bold text-xl text-white">{item.label}</Text>
                </Pressable>
              );
            })}

            <Pressable
              onPress={() => {
                closeDrawer();
                setShowLogoutModal(true);
              }}
              className="mt-4 w-full rounded bg-red-600 px-4 py-3">
              <Text className="text-base text-white">Logout</Text>
            </Pressable>
          </Animated.View>
        </>
      )}
    </>
  );
};

export default CustomHeader;
