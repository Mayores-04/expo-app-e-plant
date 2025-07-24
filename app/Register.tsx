import { View, Text, Pressable, TextInput, TouchableOpacity, TextInputBase } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Register = () => {
  const [userName, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    console.log("sign up pressed!");
    router.replace('/Login');
  }
  return (
    <SafeAreaView className="w-full flex-1 items-center justify-around bg-[#81A48B] ">
      <View className="w-[80%] items-center justify-center ">
        <Text className="p-10 text-7xl text-white">E-Plant</Text>

        <View className="w-full items-center gap-3">
          <Text className="text-xl font-bold text-white">Register</Text>
          <TextInput
            className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
            placeholder="Username"
            placeholderTextColor="gray"
            value={userName}
            onChangeText={onChangeUsername}
          />
          <TextInput
            className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
            placeholder="Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={onChangeEmail}
          />
          <TextInput
            className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            value={password}
            onChangeText={onChangePassword}
          />
          <View className="relative w-full flex-row items-center ">
            <TextInput
              className="border-1 w-full rounded-md border bg-white text-center font-bold text-black shadow-slate-700"
              placeholder="Confirm Password"
              placeholderTextColor="gray"
              secureTextEntry={!showPassword}
              value={confirmPassword}
              onChangeText={onChangeConfirmPassword}
            />
            <TouchableOpacity
              className="absolute right-0 p-4"
              onPress={() => setShowPassword((prev) => !prev)}>
              <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} color="black"/>
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
            onPress={handleSignUp}>
            <Text className="text-lg font-semibold text-white">Register</Text>
          </TouchableOpacity>
          <View className="flex w-full flex-row justify-around gap-5 ">
            <Text className="text-md p-2 text-white">Already have an account?</Text>
            <TouchableOpacity className="p-2" onPress={() => router.replace('/Login')}>
              <Text className="text-md font-semibold text-white">sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="items-center gap-2">
        <Text className="text-md font-semibold text-white">or, sign up with</Text>
        <View className="flex flex-row gap-2">
          <MaterialCommunityIcons name="facebook" size={50} color="blue" />
          <MaterialCommunityIcons name="github" size={50} color="black" />
          <MaterialCommunityIcons name="gmail" size={50} color="#EA4335" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
