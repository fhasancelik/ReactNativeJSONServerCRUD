
import {Appbar, Card, ProgressBar, MD3Colors, Button,TextInput} from 'react-native-paper';

import { axiosInstance } from './App';

import {
    SafeAreaView,
    StyleSheet,
  
    View,
    Image,
  
  } from 'react-native';
import React,{useState,useEffect} from 'react'

const DetailProduct = ({navigation,route}) => {

  return (
  <SafeAreaView>
      <View>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('TabBar')} />
    </Appbar.Header>
    <TextInput>{route.params.item.id}</TextInput>
      <TextInput>{route.params.item.title}</TextInput>
      <TextInput>{route.params.item.description}</TextInput>
      <TextInput>{route.params.item.price}</TextInput>
      <TextInput>{route.params.item.thumbnail}</TextInput>
    </View>
  </SafeAreaView>
  )
}

export default DetailProduct

const styles = StyleSheet.create({})