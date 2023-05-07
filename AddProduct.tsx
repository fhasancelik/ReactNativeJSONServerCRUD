import {Appbar, Card, ProgressBar, MD3Colors, Button} from 'react-native-paper';

import {axiosInstance} from './App';

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
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [thumbnail, setThumbnail] = useState();

  const newPro = {
    id: id,
    title: title,
    description: description,
    price: price,
    thumbnail: thumbnail,
  };
  const addProduct = () => {
    //console.log(willadded)

    axiosInstance.post('products', newPro);
  };

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Content title="Add Product" />
      </Appbar.Header>
      <View style={{marginHorizontal: 25, marginVertical: 15, gap: 15}}>
        <TextInput
          value={id}
          onChangeText={text => {
            setId(text);
          }}
          placeholder="ID"
          editable={true}
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />

        <TextInput
          value={title}
          onChangeText={text => {
            setTitle(text);
          }}
          placeholder="Title"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          value={description}
          onChangeText={text => {
            setDescription(text);
          }}
          placeholder="Description"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          value={price}
          onChangeText={text => {
            setPrice(text);
          }}
          placeholder="Price"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            color: 'black',
          }}
        />
        <TextInput
          value={thumbnail}
          onChangeText={text => {
            setThumbnail(text);
          }}
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
