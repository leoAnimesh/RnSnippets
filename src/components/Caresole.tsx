import {View, ScrollView, ViewStyle, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from '../utils/theme';

interface CaresoleProps {
  data: any[];
  renderItem: ({item, index}: {item: any; index: number}) => React.ReactNode;
  itemWidth?: number;
  gap?: number;
  itemWrapperStyles?: ViewStyle;
}

const Caresole: React.FC<CaresoleProps> = ({
  data,
  renderItem,
  itemWidth = theme.wp(90),
  gap = theme.wp(2),
  itemWrapperStyles,
}) => {
  const scrollRef = React.useRef<FlatList>(null);
  const indicatorRef = React.useRef<FlatList>(null);
  const [currentScrollIndex, setCurrentScrollIndex] = React.useState(0);

  useEffect(() => {
    scrollRef?.current?.scrollToIndex({
      animated: true,
      index: currentScrollIndex,
      viewOffset: 2,
      viewPosition: 0.5,
    });
    indicatorRef?.current?.scrollToIndex({
      animated: true,
      index: currentScrollIndex,
      viewPosition: 0.5,
    });
  }, [currentScrollIndex]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        initialNumToRender={7}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        scrollEventThrottle={30}
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / itemWidth);
          setCurrentScrollIndex(index);
        }}
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
          initialNumToRender={7}
          initialScrollIndex={currentScrollIndex}
          ref={indicatorRef}
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

export default Caresole;
