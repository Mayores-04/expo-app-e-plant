import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomHeader = () => {
  return (
    <SafeAreaView className='p-4'>
      <Text>Custom header</Text>
    </SafeAreaView>
  )
}

export default CustomHeader