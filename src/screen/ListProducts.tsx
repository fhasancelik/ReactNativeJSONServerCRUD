import React, {useContext, useEffect, useState} from 'react';

import {Appbar} from 'react-native-paper';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ProductsContext} from '../context/ProductsProvider';
import {Card, ProgressBar, MD3Colors, Button} from 'react-native-paper';
import {Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

function ListProducts({}) {
  const {products, handleDelete} = useContext(ProductsContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Content title="Our Producst" />
        <Appbar.Action icon="delete" />
        <Appbar.Action icon="reload" />
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailProduct', {item: item})
                }>
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
                  right={props => (
                    <View>
                      <Text>{item.price} $</Text>

                      <TouchableOpacity onPress={() => handleDelete(item.id)}>
                        <Icon name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    </View>
                  )}
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

export default ListProducts;
