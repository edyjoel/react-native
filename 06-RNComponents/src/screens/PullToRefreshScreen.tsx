import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl, SafeAreaView, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

  const {top} = useSafeAreaInsets();
  const {theme: {colors, dividerColor, dark}} = useContext(ThemeContext)
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Refreshed');
    }, 3500);
  }
  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top: 0
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          // style={{ backgroundColor: '#5856D6' }}
          tintColor={dark ? 'white': 'black'}
          // title={'Refreshing...'}
          // titleColor={'white'}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to Refresh' />
        {
          data && <HeaderTitle title={data} />
        }
      </View>
    </ScrollView>
  )
}
