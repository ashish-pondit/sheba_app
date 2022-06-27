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
        <ImageSlider />
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
  },
  scrollDesign: {
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: colorValue.secondary,
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