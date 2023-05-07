import React from 'react';
import type {PropsWithChildren} from 'react';
import { Appbar } from 'react-native-paper';
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
      <View>
  
      
      </View>
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
       <Tab.Screen name="Products" component={Products} options={{headerShown:false}}/>
      <Tab.Screen name="AddProducts" component={AddProducts} />
     
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
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
