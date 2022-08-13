import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { MenuItem } from '../interfaces/appInterfaces'


interface Props {
  menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation = useNavigation();
  // const {colors} = useTheme();
  const {theme: {colors}} = useContext(ThemeContext)

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.components as any)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={30} color={colors.primary} />
        <Text style={{
          ...styles.itemText,
          color: colors.text
        }}>{menuItem.name}</Text>
        <View style={{flex: 1}}></View>
        <Icon style={styles.itemIconArrow} name='chevron-forward-outline' size={30} color={colors.primary} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
  itemIconArrow: {
    marginLeft: 'auto',
  }

});