import {View, ViewStyle, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {wp} from '../../utils/theme';
import {FlashList} from '@shopify/flash-list';

interface CenterAlignedCarouselProps {
  data: any[];
  renderItem: ({item, index}: {item: any; index: number}) => React.ReactNode;
  itemWidth?: number;
  gap?: number;
  itemWrapperStyles?: ViewStyle;
}

const CenterAlignedCarousel: React.FC<CenterAlignedCarouselProps> = ({
  data,
  renderItem,
  itemWidth = wp(90),
  gap = wp(2),
  itemWrapperStyles,
}) => {
  const scrollRef = useRef<FlashList<any>>(null);
  const indicatorRef = useRef<FlatList<any>>(null);
  const [currentScrollIndex, setCurrentScrollIndex] = React.useState(0);

  const getSrcollIndex = (e: any) => {
    const index = Math.min(
      Math.max(0, Math.round(e.nativeEvent.contentOffset.x / itemWidth)),
      data.length - 1,
    );
    setCurrentScrollIndex(index);
  };

  useEffect(() => {
    scrollRef?.current?.scrollToIndex({
      animated: true,
      index: currentScrollIndex,
      viewOffset: 6,
      viewPosition: 0.5,
    });
    indicatorRef?.current?.scrollToIndex({
      animated: true,
      index: currentScrollIndex,
      viewPosition: 0.5,
    });
  }, [currentScrollIndex]);

  console.log('rendered');

  return (
    <View style={{flex: 1}}>
      <FlashList
        estimatedItemSize={itemWidth + gap}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        scrollEventThrottle={16}
        onScroll={getSrcollIndex}
        initialScrollIndex={currentScrollIndex}
        data={data}
        horizontal
        renderItem={({item, index}) => (
          <View
            key={index}
            style={[{width: itemWidth, marginRight: gap}, itemWrapperStyles]}>
            {renderItem({item, index})}
          </View>
        )}
      />
      {/* scroll indicator */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <FlatList
          onScrollToIndexFailed={() => 0}
          ref={indicatorRef}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={currentScrollIndex}
          data={data}
          style={{width: 50, paddingVertical: 5}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          horizontal
          renderItem={({item, index}) => (
            <View
              key={index}
              style={{
                width: currentScrollIndex === index ? 8 : 6,
                height: currentScrollIndex === index ? 8 : 6,
                backgroundColor:
                  currentScrollIndex === index ? 'black' : 'gray',
                borderRadius: 50,
                marginHorizontal: 5,
              }}></View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CenterAlignedCarousel;
