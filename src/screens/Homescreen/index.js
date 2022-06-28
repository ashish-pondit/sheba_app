import React from 'react';
import type {Node} from 'react';
import {
  Button,
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
import {colorValue, spacing} from '../../config';
import ImageSlider from '../../component/ImageSlider';
import Search from '../../component/Search';
import Category from '../../component/Category';
import Bigdeal from '../../component/Bigdeal';
import Slidebonus from '../../component/Slidebonus';
import Browsemore from '../../component/Browsemore';
import SmallBanner from '../../component/SmallBanner';
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

const slider2 = [
  require('../../assets/slider-2_image-1.jpg'),
  require('../../assets/slider-2_image-2.jpg'),
  require('../../assets/slider-2_image-3.jpg'),
  require('../../assets/slider-2_image-4.jpg'),
];

const trending = [
  {
    image: require('../../assets/trending-1.jpg'),
    caption: 'AC Servicing',
  },
  {
    image: require('../../assets/trending-2.jpg'),
    caption: 'Laptop Servicing',
  },
  {
    image: require('../../assets/trending-3.jpg'),
    caption: 'On Demand Driver',
  },
  {
    image: require('../../assets/trending-4.jpg'),
    caption: 'Inside City',
  },
];

const recommended = [
  {
    image: require('../../assets/recommended-1.jpg'),
    caption: 'AC Servicing',
  },
  {
    image: require('../../assets/recommended-2.jpg'),
    caption: 'Laptop Servicing',
  },
  {
    image: require('../../assets/recommended-3.jpg'),
    caption: 'On Demand Driver',
  },
  {
    image: require('../../assets/recommended-4.jpg'),
    caption: 'Inside City',
  },
];

const carSolution = [
  {
    image: require('../../assets/car_sol-1.jpg'),
    caption: 'AC Servicing',
  },
  {
    image: require('../../assets/car_sol-2.jpg'),
    caption: 'Laptop Servicing',
  },
  {
    image: require('../../assets/car_sol-3.jpg'),
    caption: 'On Demand Driver',
  },
  {
    image: require('../../assets/car_sol-4.jpg'),
    caption: 'Inside City',
  },
];

const forHome = [
  {
    image: require('../../assets/for_hm-1.jpg'),
    caption: 'AC Servicing',
  },
  {
    image: require('../../assets/for_hm-2.jpg'),
    caption: 'Laptop Servicing',
  },
  {
    image: require('../../assets/for_hm-3.jpg'),
    caption: 'On Demand Driver',
  },
  {
    image: require('../../assets/for_hm-4.jpg'),
    caption: 'Inside City',
  },
];

const forCare = [
  {
    image: require('../../assets/for_care-1.jpg'),
    caption: 'AC Servicing',
  },
  {
    image: require('../../assets/for_care-2.jpg'),
    caption: 'Laptop Servicing',
  },
  {
    image: require('../../assets/for_care-3.jpg'),
    caption: 'On Demand Driver',
  },
  {
    image: require('../../assets/for_care-4.jpg'),
    caption: 'Inside City',
  },
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
        <Bigdeal imgPath={require('../../assets/best_deal_51_banner.jpg')} />
        <Slidebonus />
        <ImageSlider imageList={slider2} />
        <Browsemore tab={'Trending'} imgCap={trending} />
        <Browsemore tab={'Recommended'} imgCap={trending} />

        {/* 3x banner goes here */}
        <SmallBanner imgPath={require('../../assets/smaller_banner-1.jpg')} />
        <SmallBanner imgPath={require('../../assets/smaller_banner-2.jpg')} />
        <SmallBanner imgPath={require('../../assets/smaller_banner-3.jpg')} />
        <Browsemore tab={'Car Solution'} imgCap={carSolution} />
        <Browsemore tab={'For Your Home'} imgCap={forHome} />
        <Browsemore tab={'For Your Care'} imgCap={forCare} />
        <Bigdeal imgPath={require('../../assets/last_service_banner.jpg')} />

        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.btnTxt}>View all services</Text>
        </TouchableOpacity>
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
  viewBtn: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    height: 50,
    flexGrow: 1,
    backgroundColor: colorValue.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
