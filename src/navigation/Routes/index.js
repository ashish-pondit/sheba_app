import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
