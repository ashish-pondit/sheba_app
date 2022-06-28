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

const bonuses = [
  require('../../assets/small_deal-1.jpg'),
  require('../../assets/small_deal-2.jpg'),
  require('../../assets/small_deal-3.jpg'),
  require('../../assets/small_deal-4.jpg'),
];
const Slidebonus = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.caption}>BEST DEAL UPTO 51% DISCOUNT</Text>
      <ScrollView
        style={styles.scrollDesign}
        //   pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {bonuses.map((item, index) => (
          <TouchableOpacity>
            <Image source={item} style={styles.imageStyle} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 20,
  },
  scrollDesign: {
    height: 120,
    width: '100%',
  },
  imageStyle: {
    height: 110,
    width: 110,
    marginHorizontal: 10,
  },
  caption: {
    color: 'black',
    marginHorizontal: spacing.sm,
    marginVertical: 5,
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Slidebonus;
