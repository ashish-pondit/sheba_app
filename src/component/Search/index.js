import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {colorValue} from '../../config';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Search = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.searchStyle}>
        <Text style={styles.iconHolder}>
          <EvilIcons name="search" size={30} color={'gray'} />
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={null}
          value={null}
          placeholder="Search Services"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 15,
    flexGrow: 1,
  },
  searchStyle: {
    borderWidth: 1.5,
    borderColor: '#b0b3b5',
    borderRadius: 12,
    flexGrow: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  iconHolder: {textAlignVertical: 'center'},
});

export default Search;
