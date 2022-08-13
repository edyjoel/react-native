import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Text, TouchableWithoutFeedback } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'


export const TextInputScreen = () => {

  const {onChange, form, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  });

  const {theme: {colors, dividerColor}} = useContext(ThemeContext)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title='TextInputs' />

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Suscribirse</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value: any) => onChange(value, 'isSubscribed')} />
            </View>

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Ingrese su nombre'
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={ (value) => onChange( value, 'name' ) }
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Ingrese su email'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={ (value) => onChange( value, 'email' ) }
              keyboardType='email-address'
              placeholderTextColor={dividerColor}
            />
            <HeaderTitle title={JSON.stringify(form, null,  5)} />
            <HeaderTitle title={JSON.stringify(form, null,  5)} />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Ingrese su telefono'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='phone-pad'
              onChangeText={ (value) => onChange( value, 'phone' ) }
              placeholderTextColor={dividerColor}
            />

            <View style={{height: 100}}></View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  switchText: {
    fontSize: 24,
  },
})