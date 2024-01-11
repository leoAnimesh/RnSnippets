import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeAreaView from '../components/shared/SafeAreaView';
import Caresole from '../components/carousel/CenterAlignedCarousel';
import {wp} from '../utils/theme';
import CustomText from '../components/shared/CustomText';
import {fonts} from '../utils/constants';

const Cards = ({item, index}: {item: any; index: number}) => {
  return (
    <View
      style={{
        borderColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f5f55f',
        marginLeft: index === 0 ? 10 : 0,
        padding: 20,
      }}>
      <CustomText style={{fontFamily: fonts.sansBold, fontSize: 20}}>
        {item.title}
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: '#000',
            paddingVertical: 8,
            paddingHorizontal: 15,
            borderRadius: 10,
            top: 10,
          }}>
          <CustomText style={{fontFamily: fonts.sansBold, color: '#fff'}}>
            Click me
          </CustomText>
        </TouchableOpacity>
        <View style={{width: 70, height: 70, borderRadius: 50}}>
          <Image
            resizeMode="contain"
            source={{uri: item?.image}}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const caresoleData = new Array(10).fill({
    title: 'Future Implementation Specialist',
    image:
      'https://w7.pngwing.com/pngs/630/871/png-transparent-heart-eyes-emoji-emoji-heart-iphone-love-emoji-smiley-sticker-emoticon-thumbnail.png',
    buttonText: 'click me',
  });

  return (
    <SafeAreaView>
      <Caresole
        data={caresoleData}
        itemWidth={wp(85)}
        gap={wp(3)}
        renderItem={data => <Cards key={data.index} {...data} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
