import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Appbar,
  Card,
  Avatar,
  IconButton,
  ProgressBar,
  MD3Colors,
  
  Button,
} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
  TextInput
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const axiosInstance = axios.create({
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
  const [products, setProducts] = useState<ProductProps | null>(null);
  
  const [id,setId]=useState()
  const[title,setTitle]=useState()
  const[description,setDescription]=useState()
  const [price,setPrice]=useState()
  const[thumbnail,setThumbnail]=useState()
const [willadded,setWillAdded]=useState({})
const newPro={
  id:id,
  title:title,
  description:description,
  price:price,
  thumbnail:thumbnail
}

const addProduct=()=>{
 

//console.log(willadded)

axiosInstance.post('products',newPro)


}

  const axiosGetProducts = async () => {
    const response = await axiosInstance.get('products');
    const data = response.data;
    //console.log(data)
    setProducts(data);
    //console.log(products)
  };

  function Products() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.Content title="Our Producst" />
          <Appbar.Action icon="delete" onPress={() => setProducts([])} />
          <Appbar.Action icon="reload" onPress={() => axiosGetProducts()} />
        </Appbar.Header>
        <View style={{flex: 1}}>
          <FlatList
            data={products}
            ListEmptyComponent={() => {
              return (
                <View>
                  <ProgressBar progress={0.5} color={MD3Colors.error50} />
                  <Text>Data Not Found</Text>
                </View>
              );
            }}
            renderItem={({item}) => {
              return (
                <Card.Title
                  title={item.title}
                  subtitle={item.description}
                  left={props => (
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: `${item.thumbnail}`,
                      }}
                    />
                  )}
                  right={props => <Text>{item.price} $</Text>}
                />
              );
            }}
          />
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
        <View style={{marginHorizontal:25,marginVertical:15,gap:15}}>
<TextInput value={id} onChangeText={(text)=>{setId(text)}} placeholder='ID' style={{borderWidth:2,padding:10,borderRadius:10,color:'black'}}/>
<TextInput value={title} onChangeText={(text)=>{setTitle(text)}} placeholder='Title' style={{borderWidth:2,padding:10,borderRadius:10,color:'black'}}/>
<TextInput value={description} onChangeText={(text)=>{setDescription(text)}} placeholder='Description' style={{borderWidth:2,padding:10,borderRadius:10,color:'black'}}/>
<TextInput value={price} onChangeText={(text)=>{setPrice(text)}} placeholder='Price' style={{borderWidth:2,padding:10,borderRadius:10,color:'black'}}/>
<TextInput value={thumbnail} onChangeText={(text)=>{setThumbnail(text)}} placeholder='Price' style={{borderWidth:2,padding:10,borderRadius:10,color:'black'}}/>
      
        </View>
        <Button mode='contained' onPress={()=>{addProduct()}} style={{width:200,marginHorizontal:25}}>Add Product</Button>
      </SafeAreaView>
    );
  }

  function TabBar() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="AddProducts" component={AddProducts} />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
      
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
    axiosGetProducts();
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

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
