import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colorValue} from '../../config';
import ImageSlider from '../../component/ImageSlider';
import Search from '../../component/Search';
import Category from '../../component/Category';
// import {slider1} from '../../data';

const slider1 = [
  require('../../assets/slider-1_image-1.jpg'),
  require('../../assets/slider-1_image-2.jpg'),
  require('../../assets/slider-1_image-3.jpg'),
  require('../../assets/slider-1_image-4.jpg'),
  require('../../assets/slider-1_image-5.jpg'),
  require('../../assets/slider-1_image-6.jpg'),
  require('../../assets/slider-1_image-7.jpg'),
];

const HomeScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.locationView}>
        <Text>
          <FontAwesome name="map-marker" size={40} color={colorValue.primary} />
        </Text>
        <TouchableOpacity style={styles.locationName}>
          <Text style={styles.locationPicked}>Gulshan</Text>
          <Text style={styles.locationDropdown}>
            Gulshan
            <FontAwesome
              name="sort-down"
              size={20}
              color={colorValue.darkSoft}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollDesign}>
        <Search />
        <ImageSlider imageList={slider1} />
        <Category />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  scrollDesign: {
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  locationView: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'yellow',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  locationName: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  locationPicked: {
    color: colorValue.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  locationDropdown: {
    color: colorValue.darkSoft,
    fontSize: 13,
  },
});

export default HomeScreen;
