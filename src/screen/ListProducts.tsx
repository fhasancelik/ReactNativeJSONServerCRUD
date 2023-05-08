import React, {useContext, useEffect, useState} from 'react';

import {Appbar} from 'react-native-paper';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {ProductsProvider} from '../context/ProductsProvider';

import UserList from './UserList';

function ListProducts({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Content title="Our Producst" />
        <Appbar.Action icon="delete" />
        <Appbar.Action icon="reload" />
      </Appbar.Header>
      <View style={{flex: 1}}>
        <ProductsProvider>
          <UserList />
        </ProductsProvider>
      </View>
    </SafeAreaView>
  );
}

export default ListProducts;
