import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInteface';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[]
  navigation?: any;
}

export const HorizontalSlider = ({title, movies, navigation}: Props) => {
  return (
    <View style={{
      height: (title) ? 260 : 220,
    }}>
      {
        title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
      }
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster navigation={navigation} movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
};
