import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width > 768 ? 'permanent' : 'front'
      }}
      drawerContent={props => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri: 'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de menu */}
      <View style={ styles.menuContainer }>
        <TouchableOpacity
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Icon name="home-outline" size={25} color="#000" />
          <Text style={ styles.menuTexto }>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Icon name="settings-outline" size={25} color="#000" />
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}