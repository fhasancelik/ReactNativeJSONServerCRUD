import {
  Appbar,
  Card,
  ProgressBar,
  MD3Colors,
  Button,
  TextInput,
} from 'react-native-paper';

import {axiosInstance} from './App';

import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const DetailProduct = ({navigation, route}) => {
  const [id, setId] = useState(route.params.item.id);
  const [title, setTitle] = useState(route.params.item.title);
  const [description, setDescription] = useState(route.params.item.description);
  const [price, setPrice] = useState(route.params.item.price);
  const [thumbnail, setThumbnail] = useState(route.params.item.thumbnail);

  const newPro = {
   
    title: title,
    description: description,
    price: price,
    thumbnail: thumbnail,
  };

  const updateProduct = () => {
    axiosInstance.put(`products/${route.params.item.id}`,newPro);
  };

  return (
    <SafeAreaView>
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.navigate('TabBar')} />
        </Appbar.Header>
        <TextInput
          
          onChangeText={text => {
            setId(text);
          }}>
          {route.params.item.id}
        </TextInput>
        <TextInput
          value={title}
          onChangeText={text => {
            setTitle(text);
          }}>
        
        </TextInput>
        <TextInput
     value={description}
          onChangeText={text => {
            setDescription(text);
          }}>
         
        </TextInput>
        <TextInput
       value={price}
          onChangeText={text => {
            setPrice(text);
          }}>
       
        </TextInput>
        <TextInput
    value={thumbnail}
          onChangeText={text => {
            setThumbnail(text);
          }}>
    
        </TextInput>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          updateProduct()
        }}
        style={{width: 200, marginHorizontal: 25}}>
        Add Product
      </Button>
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({});
