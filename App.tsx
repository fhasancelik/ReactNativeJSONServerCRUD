import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Products() {
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Our Producst" />
      </Appbar.Header>
      <View></View>
    </SafeAreaView>
  );
}

function AddProducts() {
  return (
    <SafeAreaView>
      <View>
        <Text>addProducts Page</Text>
      </View>
    </SafeAreaView>
  );
}

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
      <Tab.Screen name="AddProducts" component={AddProducts} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {


  const fetchProducts = async () => {
    try {
      const response=await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      //console.log(JSON.stringify(response,null,4))

const data=await response.json()
//console.log(data[0].brand)


    } catch (error) {


      console.log('Error Message :' + error)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
