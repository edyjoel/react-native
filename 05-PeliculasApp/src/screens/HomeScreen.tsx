import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Button, Dimensions, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { StackScreenProps } from '@react-navigation/stack';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

interface Props extends StackScreenProps<any, any>{};


const { width: windowWith } = Dimensions.get('window')

export const HomeScreen = ({ navigation }: Props) => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  }

  useEffect(() => {
    if(nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying])

  if(isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* <MoviePoster
            movie={peliculasEnCine[0]}
          /> */}
          {/* Carousel principal */}
          <View style={{
            height: 440,
          }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster navigation={navigation} movie={item} /
              >}
              sliderWidth={windowWith}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>
          {/* Peliculas */}
          <HorizontalSlider navigation={navigation} title='Popular' movies={popular} />
          <HorizontalSlider navigation={navigation} title='Top Rated' movies={topRated} />
          <HorizontalSlider navigation={navigation} title='Upcoming' movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
