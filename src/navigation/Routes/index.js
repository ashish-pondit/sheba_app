import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}

function Inbox() {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}

function Orders() {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}

function Help() {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}

function More() {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={Inbox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
