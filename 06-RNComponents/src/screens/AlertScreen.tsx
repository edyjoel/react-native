import React from 'react'
import { Button, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('Dismissed')
      }
    )
  }

  const showPrompt = () => {
    prompt(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    )

    {/* Only IOS */}
    // Alert.prompt(
    //   'Titulo',
    //   'Este es el mensaje de la alerta',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'destructive'
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') }
    //   ],
    //   'default'
    // )
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />
      <Button
        title='Mostrar Alerta'
        onPress={showAlert}
      />

      <View style={{height: 10}}>

      </View>

      <Button
        title='Mostrar Prompt'
        onPress={showPrompt}
      />
    </View>
  )
}
