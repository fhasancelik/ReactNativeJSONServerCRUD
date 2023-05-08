import {Appbar, Button} from 'react-native-paper';

import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';

import { ProductsContext } from '../context/ProductsProvider';

import { ProductsProvider } from '../context/ProductsProvider';
import { useNavigation } from '@react-navigation/native';

const AddProduct = () => {

const {handleAdd}=useContext(ProductsContext)

const navigation=useNavigation()

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const onChangeText = (key: string, value: string) => {
    setProduct({...product, [key]: value});
  };
  const handleAddProduct = () => {
    handleAdd(product);
    // Ürün eklendikten sonra yapılacak işlemler
    // Örneğin, formları temizleme veya sayfayı yenileme gibi
    setProduct({
      title: '',
      description: '',
      price: 0,
      thumbnail: '',
    });

    navigation.navigate('Products')

  };

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Add Product" />
      </Appbar.Header>
      <View style={{marginHorizontal: 25, marginVertical: 15, gap: 15}}>
        <TextInput
          onChangeText={text => onChangeText('title', text)}
          placeholder="Title"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('description', text)}
          placeholder="Description"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('price', text)}
          placeholder="Price"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          onChangeText={text => onChangeText('thumbnail', text)}
          placeholder="Add thumbnail"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
      </View>
  
    <Button onPress={handleAddProduct} mode="contained" style={{width: 200, marginHorizontal: 25}}>
        Add Product
      </Button>

 

    </SafeAreaView>
  );
};

export default AddProduct;

