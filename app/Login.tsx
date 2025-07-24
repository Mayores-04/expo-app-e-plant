import { View, Text, Pressable, TextInput, TouchableOpacity, TextInputBase } from 'react-native';
import React, { use, useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
  const [userName, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () =>{
    console.log("login pressed!");
    router.replace('/(tabs)/HomeScreen')
  }
  return (
    <SafeAreaView className="w-full flex-1 items-center justify-around bg-[#81A48B] ">
      <View className="w-[80%] items-center justify-center ">
        <Text className="p-10 text-7xl text-white">E-Plant</Text>

        <View className="w-full items-center gap-3">
          <Text className="text-xl font-bold text-white">Log in</Text>
          <TextInput
            className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
            placeholder="Username"
            placeholderTextColor="gray"
            value={userName}
            onChangeText={onChangeUsername}
          />
          <View className="relative w-full flex-row items-center ">
            <TextInput
              className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={onChangePassword}
            />
            <TouchableOpacity
              className="absolute right-0 p-4"
              onPress={() => setShowPassword((prev) => !prev)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View className="mb-4 w-full items-end">
            <TouchableOpacity onPress={() => router.replace('/ForgotPassword')}>
              <Text className="text-lg text-white">Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="w-full items-center rounded-md bg-green-400 p-2"
            activeOpacity={0.6}
            onPress={handleLogin}>
            <Text className="text-lg font-semibold text-white">Login</Text>
          </TouchableOpacity>
          <View className="flex w-full flex-row justify-around gap-5">
            <Text className="text-md p-2 text-white">Don't have an account?</Text>
            <TouchableOpacity className="p-2" onPress={() => router.replace('/Register')}>
              <Text className="text-md font-semibold text-white ">sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="items-center gap-2">
        <Text className="text-md font-semibold text-white">or, log in with</Text>
        <View className="flex flex-row gap-2">
          <MaterialCommunityIcons name="facebook" size={50} color="blue" />
          <MaterialCommunityIcons name="github" size={50} color="black" />
          <MaterialCommunityIcons name="gmail" size={50} color="#EA4335" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
