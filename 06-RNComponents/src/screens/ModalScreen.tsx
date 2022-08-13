import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Modal Screen' />
      <Button
        title='Open Modal'
        onPress={() => setIsVisible(true)}
      />

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: 'white',
            width: '80%',
            height: '50%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: 'black',
            shadowOpacity: 0.2
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20
            }}>Modal</Text>
            <Text style={{
              fontSize: 16,
              marginBottom: 20
            }}>This is a modal</Text>
            <Button
              title='Close Modal'
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>



    </View>
  )
}
