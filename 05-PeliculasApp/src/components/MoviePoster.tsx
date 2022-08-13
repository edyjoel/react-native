import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInteface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  navigation?: any;
}

export const MoviePoster = ({ movie, height = 420, width = 300, navigation }: Props,) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('DetailScreen', movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  }
});
