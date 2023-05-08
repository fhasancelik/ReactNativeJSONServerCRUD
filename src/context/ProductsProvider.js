// UserContext.js

import React, {createContext, useEffect, useState} from 'react';
import fetchProducts from './getProduct';
import deleteProduct from './deleteProducts';
import updateProduct from './updateProduct';
import { addProduct } from './addProduct';

import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {




  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error setting users:', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async productId => {
    try {
      await deleteProduct(productId);
      Alert.alert('Success', 'User deleted successfully');
      getProducts();
    } catch (error) {
      console.error('Error deleting user:', error);
      Alert.alert('Error', 'Failed to delete user');
    }
  };

  const handleAdd = async (productData) => {
    try {
      const newProduct = await addProduct(productData);
      setProducts([...products, newProduct]);
      Alert.alert('Başarılı', 'Ürün başarıyla eklendi');
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu:', error);
      Alert.alert('Hata', 'Ürün eklenemedi');
    }
  };


  const handleUpdate = async (productId, updatedProduct) => {
    try {
      await updateProduct(productId, updatedProduct);
      Alert.alert('Success', 'Product updated successfully');
      getProducts();
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('Error', 'Failed to update product');
    }
  };







  return (
    <ProductsContext.Provider value={{products, handleDelete,handleAdd,handleUpdate}}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext };
