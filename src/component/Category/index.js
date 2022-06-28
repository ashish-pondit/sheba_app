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
  return (
    <View style={styles.Container}>
      {logos.map((item, index) => (
        <Caticon key={index} logo={item.imgPath} caption={item.caption} />
      ))}

      <Text style={styles.hline}>
        .........................................................................................
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
    marginHorizontal: spacing.md,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#d8d9da',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  hline: {
    fontSize: 15,
    color: '#b0b3b5',
  },
  moreButton: {
    color: colorValue.primary,
    fontSize: 15,
  },
});

export default Category;
