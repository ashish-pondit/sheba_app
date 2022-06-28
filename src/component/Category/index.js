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
import {colorValue, spacing} from '../../config';
import Caticon from '../Caticon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const logos = [
  {
    imgPath: require('../../assets/service_logo-1.png'),
    caption: 'AC Repair Services',
  },
  {
    imgPath: require('../../assets/service_logo-2.png'),
    caption: 'Appliance Repair',
  },

  {
    imgPath: require('../../assets/service_logo-3.png'),
    caption: 'Beauty & Salon',
  },
  {
    imgPath: require('../../assets/service_logo-4.png'),
    caption: 'Trips & Travels',
  },
  {
    imgPath: require('../../assets/service_logo-5.png'),
    caption: 'Car Care Services',
  },
  {
    imgPath: require('../../assets/service_logo-6.png'),
    caption: 'Cleaning & Pest Control',
  },
  {
    imgPath: require('../../assets/service_logo-7.png'),
    caption: 'Painting & Renovation',
  },
  {
    imgPath: require('../../assets/service_logo-8.png'),
    caption: 'Shifting',
  },
];
const Category = props => {
  console.log(logos);

  logos.map((item, index) => {
    console.log('*************');
    console.log(item);
    console.log(index);
  });
  return (
    <View style={styles.Container}>
      <Caticon logo={logos[0].imgPath} caption={logos[0].caption} />
      <Caticon logo={logos[1].imgPath} caption={logos[1].caption} />
      <Caticon logo={logos[2].imgPath} caption={logos[2].caption} />
      <Caticon logo={logos[3].imgPath} caption={logos[3].caption} />
      <Caticon logo={logos[4].imgPath} caption={logos[4].caption} />
      <Caticon logo={logos[5].imgPath} caption={logos[5].caption} />
      <Caticon logo={logos[6].imgPath} caption={logos[6].caption} />
      <Caticon logo={logos[7].imgPath} caption={logos[7].caption} />

      <Text style={styles.hline}>
        ------------------------------------------------------
      </Text>
      <TouchableOpacity>
        <Text style={styles.moreButton}>
          More Categories
          <FontAwesome name="sort-down" size={25} color={colorValue.primary} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 250,
    flexGrow: 1,
    // backgroundColor: 'green',
    marginHorizontal: spacing.md,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#d8d9da',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  hline: {
    fontSize: 25,
    color: '#b0b3b5',
  },
  moreButton: {
    color: colorValue.primary,
    fontSize: 15,
  },
});

export default Category;
