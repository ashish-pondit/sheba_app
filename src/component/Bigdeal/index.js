import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {spacing} from '../../config';

const Bigdeal = props => {
  const {imgPath} = props;
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={imgPath} style={styles.imageStyle} resizeMode="stretch" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    // margin: spacing.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 200,
    width: '100%',
  },
});

export default Bigdeal;
