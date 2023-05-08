import {
  Appbar,
 
  Button,
 
} from 'react-native-paper';



import {SafeAreaView, StyleSheet, View, Image,TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

import { axiosInstance } from '../utils/utils';

const DetailProduct = ({navigation, route}) => {










  const id=route.params.item.id
  const title = route.params.item.title
  const description = route.params.item.description
  const price= route.params.item.price
  const thumbnail= route.params.item.thumbnail

  const [product, setProduct] = useState({
    id:'',
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const onChangeText = (key: string, value: string) => {
    setProduct({...product, [key]: value});
  };

  const productUpdate=(proID,proData)=>{
    axiosInstance.put(`products/${proID}`,proData)
  }


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
     productUpdate(id,product);
        }}
        style={{width: 200, marginHorizontal: 25}}>
        Update Product
      </Button>


     
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({});
