import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    // <HolaMundoScreen />
    <SafeAreaView style={{flex: 1}}>
      <TareaScreen />
    </SafeAreaView>
  )
}
