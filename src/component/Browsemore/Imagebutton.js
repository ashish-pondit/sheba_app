import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {spacing} from '../../config';

const Imagebutton = props => {
  const {caption, imgPath} = props;
  console.log('printing from image button');
  console.log(caption);
  console.log(imgPath);
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={imgPath} style={styles.imgStyle} resizeMode="stretch" />
      <Text style={styles.captionStyle}>{caption}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: 160,
    marginHorizontal: spacing.sm,
  },
  imgStyle: {
    height: 110,
    width: '100%',
    marginTop: 6,
  },
  captionStyle: {
    textAlign: 'left',
    color: 'black',
    fontSize: 15,
    marginVertical: spacing.sm - 3,
  },
});

export default Imagebutton;
