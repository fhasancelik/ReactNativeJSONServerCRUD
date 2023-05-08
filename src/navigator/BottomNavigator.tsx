import React, {useEffect, useState} from 'react';

import {StyleSheet} from 'react-native';


import {
 
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();



import ListProducts from '../screen/ListProducts';
import AddProducts from '../screen/AddProduct';

const BottomNavigator = () => {



  return (
     <Tab.Navigator>
          <Tab.Screen
          name="Products"
          component={ListProducts}
          options={{headerShown: false}}
        />
        <Tab.Screen name="AddProducts" component={AddProducts} options={{headerShown: false}}/>
      

      </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})