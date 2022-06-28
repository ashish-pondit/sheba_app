import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {colorValue} from '../../config';

const Caticon = props => {
  const {logo, caption} = props;
  console.log(logo);
  console.log(caption);
  return (
    <View style={styles.Container}>
      <Image source={logo} style={styles.imageStyle} />
      <Text style={styles.captionStyle}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // height: 90,
    width: 80,
    // backgroundColor: colorValue.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 4,
    // marginHorizontal: 2,
  },
  imageStyle: {
    height: 35,
    width: 35,
    marginTop: 5,
  },

  captionStyle: {
    width: '90%',
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'top',
    margin: 5,
    fontWeight: '400',
  },
});

export default Caticon;
