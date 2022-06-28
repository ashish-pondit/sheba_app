import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const ImageSlider = props => {
  const {imageList} = props;
  const [imageNo, setimageNo] = useState(0);

  const onChange = nativeEvent => {
    if (nativeEvent) {
      var slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      console.log(`current slide is ${slide}`);

      if (slide != imageNo) {
        slide = slide > 5 ? 5 : slide;
        setimageNo(slide);
      }
    }
  };

  // imageList.map((e, index) => console.log(e));

  return (
    <View style={styles.Container}>
      <View style={styles.imageWraper}>
        <ScrollView
          onScroll={({nativeEvent}) => {
            onChange(nativeEvent);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {imageList.map((e, index) => (
            <Image
              source={e}
              key={index}
              resizeMode="stretch"
              style={styles.imageStyle}
            />
          ))}
          {/* <Image source={require('../../assets/slider-1_image-1.jpg')} /> */}
        </ScrollView>
        <View style={styles.dotwraper}>
          {imageList.map((e, index) => (
            <Text style={styles.dotText} key={index}>
              <Octicons
                name="dot-fill"
                size={15}
                color={index == imageNo ? 'black' : '#caccce'}
              />
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  imageWraper: {
    flexGrow: 1,
    height: HEIGHT * 0.25 + 20,
  },
  wrap: {
    width: WIDTH - 20,
    height: HEIGHT * 0.25 + 20,
  },
  imageStyle: {
    width: WIDTH - 20,
    height: HEIGHT * 0.25,
  },
  dotwraper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotText: {
    margin: 3,
  },
});

export default ImageSlider;
