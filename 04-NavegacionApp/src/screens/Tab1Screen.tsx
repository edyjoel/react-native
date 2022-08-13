import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab1Screen');
  }, [])

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10,
    }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName='airplane-outline' />
      </Text>
    </View>
  )
};
