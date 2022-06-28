import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/Homescreen';
import {colorValue} from '../../config';

function Inbox() {
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  );
}

function Orders() {
  return (
    <View>
      <Text>Orders</Text>
    </View>
  );
}

function Help() {
  return (
    <View>
      <Text>Help</Text>
    </View>
  );
}

function More() {
  return (
    <View>
      <Text>More</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarBadgeStyle: {padding: 20},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Inbox') {
              iconName = focused
                ? 'ios-chatbubble-ellipses'
                : 'ios-chatbubble-ellipses-outline';
            } else if (route.name === 'Orders') {
              iconName = focused
                ? 'ios-list-circle-sharp'
                : 'ios-list-circle-outline';
            } else if (route.name === 'Help') {
              iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'ios-apps-sharp' : 'ios-apps-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colorValue.primary,
          tabBarInactiveTintColor: colorValue.darkSoft,
          //   tabBarLabelStyle:
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Help"
          component={Help}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
