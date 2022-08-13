import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext)
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Theme'></HeaderTitle>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLightTheme()}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
        }}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setDarkTheme()}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
        }}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}>Dark</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
