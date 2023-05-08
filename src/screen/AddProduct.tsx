import {Appbar, Card, ProgressBar, MD3Colors, Button} from 'react-native-paper';
import {axiosInstance} from '../utils/utils';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const onChangeText = (key: string, value: string) => {
    setProduct({...product, [key]: value});
  };

  const addProduct = () => {
    axiosInstance.post('products', product);
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
      <Button
        mode="contained"
        onPress={() => {
          addProduct();
        }}
        style={{width: 200, marginHorizontal: 25}}>
        Add Product
      </Button>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({});
5522255050;
