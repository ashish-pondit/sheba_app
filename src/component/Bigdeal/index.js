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

const Bigdeal = () => {
  return (
    <TouchableOpacity style={styles.Container}>
      <Image
        source={require('../../assets/best_deal_51_banner.jpg')}
        style={styles.imageStyle}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: spacing.md,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 200,
    width: '100%',
  },
});

export default Bigdeal;
