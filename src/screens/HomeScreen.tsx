import {View, Text} from 'react-native';
import React from 'react';
import SafeAreaView from '../components/SafeAreaView';
import Caresole from '../components/Caresole';
import {theme} from '../utils/theme';

const Cards = ({item, index}: {item: any; index: number}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f55f',
        marginLeft: index === 0 ? 10 : 0,
      }}>
      <Text>{item}</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{height: theme.hp(20)}}>
        <Caresole
          data={new Array(10).fill(0)}
          itemWidth={theme.wp(85)}
          gap={theme.wp(3)}
          renderItem={data => <Cards key={data.index} {...data} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
