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
import Imagebutton from './Imagebutton';
import {colorValue, spacing} from '../../config';

const Browsemore = props => {
  const {tab, imgCap} = props;
  console.log(tab);
  console.log(imgCap);

  return (
    <View style={styles.Container}>
      <View style={styles.textWraper}>
        <Text style={styles.tabText}>{tab}</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWraper}>
        {imgCap.map((item, index) => (
          <Imagebutton
            key={index}
            caption={imgCap[index].caption}
            imgPath={imgCap[index].image}
          />
        ))}
      </View>

      {/* <Imagebutton caption={imgCap[0].caption} imgPath={imgCap[0].image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // height: 300,
    margin: spacing.sm + 5,
    flexGrow: 1,
    // backgroundColor: 'green',
  },
  tabText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: spacing.sm - 5,
    // alignSelf: 'flex-start',
  },
  moreBtn: {
    fontSize: 15,
    color: colorValue.primary,
    // alignSelf: 'flex-end',
    fontWeight: '900',
  },
  textWraper: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  buttonWraper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Browsemore;
