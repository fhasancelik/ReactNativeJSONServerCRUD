import React, {useEffect, useState} from 'react';


import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';



import DetailProduct from './src/screen/DetailProduct';
import BottomNavigator from './src/navigator/BottomNavigator';
import UserList from './src/screen/UserList';


const Stack = createStackNavigator();



function App(): JSX.Element {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabBar"
          component={BottomNavigator}
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



export default App;
