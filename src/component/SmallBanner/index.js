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

const SmallBanner = props => {
  const {imgPath} = props;
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={imgPath} style={styles.imgStyle} resizeMode="stretch" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    // height: 80,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    backgroundColor: 'white',
  },
  imgStyle: {
    height: 90,
    width: '100%',
  },
});

export default SmallBanner;
