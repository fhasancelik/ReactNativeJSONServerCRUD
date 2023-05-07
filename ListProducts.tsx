import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Appbar, Card, ProgressBar, MD3Colors, Button} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AddProducts from './AddProduct';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
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

  import { axiosInstance } from './App';

  function ListProducts({navigation}) {

    const [products, setProducts] = useState<ProductProps | null>(null);


    const deleteProduct=(id : number)=>{
      axiosInstance.delete(`products/${id}`)
      axiosGetProducts()
    }

    const axiosGetProducts = async () => {
        const response = await axiosInstance.get('products');
        const data = response.data;
        //console.log(data)
        setProducts(data);
        //console.log(products)
      };
    useEffect(() => {
        //fetchProducts();
        axiosGetProducts();
      }, []);

 

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
             <TouchableOpacity onPress={()=>navigation.navigate('DetailProduct',{item:item})} >
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
                right={props => <View><Text>{item.price} $</Text>
                
               <TouchableOpacity onPress={()=>deleteProduct(item.id)}>

               <Icon name='trash' size={20} color='red' />


               </TouchableOpacity>
                </View>}
              />
             </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });
  export default ListProducts