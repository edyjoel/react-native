import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}:Props) => {

  const { changeFavorteIcon } = useContext(AuthContext)

  return(
    <TouchableOpacity
      onPress={() => changeFavorteIcon(iconName)}
    >
      <Icon
        name={iconName}
        size={50}
        color={colores.primary}
      ></Icon>
    </TouchableOpacity>
  );
};
