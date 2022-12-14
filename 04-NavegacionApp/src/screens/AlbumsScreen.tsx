import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

  const {logout, authState} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {
        authState.isLoggedIn && (
          <Button
            title='Logout'
            onPress={logout}
          />
        )
      }
    </View>
  )
};
