import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={{flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{
        width: 150, height: 150, backgroundColor: 'steelblue', borderColor: 'white', borderWidth: 10, opacity: opacity
      }} />
      <Button title='Fade In' onPress={fadeIn} />
      <Button title='Fade Out' onPress={fadeOut} />
    </View>
  )
}
