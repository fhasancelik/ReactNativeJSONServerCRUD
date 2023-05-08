// UserContext.js

import React, { createContext, useEffect, useState } from 'react';
import fetchUsers from './getProduct';
import deleteProduct from './deleteProducts';


import {

    Alert
  } from 'react-native';
import { axiosInstance } from '../utils/utils';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const data = await fetchUsers();
      setProducts(data);
    } catch (error) {
      console.error('Error setting users:', error);
    }
  };
  useEffect(() => {


    getProducts();
  }, []);


  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      Alert.alert('Success', 'User deleted successfully');
      getProducts();
    } catch (error) {
      console.error('Error deleting user:', error);
      Alert.alert('Error', 'Failed to delete user');
    }
  };




  return (
    <ProductsContext.Provider value={{users: products,handleDelete}}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider as UserProvider, ProductsContext as UserContext };
