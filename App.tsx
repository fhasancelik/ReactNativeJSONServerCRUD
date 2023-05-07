import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Appbar,Card,Avatar,IconButton} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const axiosInstance=axios.create({
  baseURL:'http://localhost:3000/'
})





function App(): JSX.Element {



  const [products,setProducts]=useState([])

const axiosGetProducts=async()=>{
 const response =await axiosInstance.get('products')
const data=response.data
//console.log(data)
setProducts(data)
//console.log(products)

 
}


  function Products() {
    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Content title="Our Producst" />
        </Appbar.Header>
        <View><FlatList 
        
        data={products}
        renderItem={({item})=>{
          return(
            <Card.Title
            title={item.title}
            subtitle={item.description}
            
            left={(props) =>    <Image
              style={styles.tinyLogo}
              source={{
                uri: `${item.thumbnail}` ,
              }}
            />}

right={(props)=><Text>{item.price} $</Text>}


          />
          )

        }}
        
        
        /></View>
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

  useEffect(() => {
    //fetchProducts();
    axiosGetProducts()
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


const styles=StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
})

export default App;
