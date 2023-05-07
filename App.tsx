import React, {useEffect, useState} from 'react';

import {StyleSheet} from 'react-native';
import AddProducts from './AddProduct';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

import ListProducts from './ListProducts';
import DetailProduct from './DetailProduct';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function App(): JSX.Element {
  function TabBar() {
    return (
      <Tab.Navigator>
          <Tab.Screen
          name="Products"
          component={ListProducts}
          options={{headerShown: false}}
        />
        <Tab.Screen name="AddProducts" component={AddProducts} options={{headerShown: false}}/>
      

      </Tab.Navigator>
    );
  }

  //   const fetchProducts = async () => {
  //     try {
  //       const response=await fetch('http://localhost:3000/products', {
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       //console.log(JSON.stringify(response,null,4))

  // const data=await response.json()
  // //console.log(data[0].brand)

  //     } catch (error) {

  //       console.log('Error Message :' + error)
  //     }
  //   };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{headerShown: false}}
        />


<Stack.Screen
          name="DetailProduct"
          component={DetailProduct}

          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
