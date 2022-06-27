import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Routes from './src/navigation/Routes';

const App: () => Node = () => {
  return (
    <View style={styles.Container}>
      <Text>Hello world !!</Text>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
