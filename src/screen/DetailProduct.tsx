import {
  Appbar,
 
  Button,
 
} from 'react-native-paper';



import {SafeAreaView, StyleSheet, View, Image,TextInput} from 'react-native';
import React, {useState, useContext} from 'react';


import { ProductsContext } from '../context/ProductsProvider';
import { useNavigation } from '@react-navigation/native';

const DetailProduct = ({navigation, route}) => {



const {handleUpdate,setUpproduct,upproduct}=useContext(ProductsContext)


const nav=useNavigation()



  const id=route.params.item.id
  const title = route.params.item.title
  const description = route.params.item.description
  const price= route.params.item.price
  const thumbnail= route.params.item.thumbnail



  const onChangeText = (key: string, value: string) => {
    setUpproduct({...upproduct, [key]: value});
  };




  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('TabBar')} />
        <Appbar.Content title="Detail Page" />
      </Appbar.Header>
      <View style={{marginHorizontal: 25, marginVertical: 15, gap: 15}}>
      <TextInput
         editable={false}
          placeholder={String(id)}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('title', text)}
          placeholder={title}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('description', text)}
          placeholder={description}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('price', text)}
          placeholder={String(price)}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('thumbnail', text)}
          placeholder={thumbnail}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
      </View>




<Button
        mode="contained"
        onPress={() => {
     handleUpdate(id,upproduct)
     nav.navigate('Products')
        }}
        style={{width: 200, marginHorizontal: 25}}>
        Update Product
      </Button>


     
    </SafeAreaView>
  );
};

export default DetailProduct;


