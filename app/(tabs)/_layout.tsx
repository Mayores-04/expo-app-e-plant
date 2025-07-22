import { View, Text } from 'react-native';
import React from 'react';
import CustomHeader from 'components/CustomHeader';
import { Slot, Stack } from 'expo-router';

export default function layout() {
  return (
    <>
      <CustomHeader />
      <Slot />
    </>
  );
}
