import React, {createContext, useEffect, useState} from 'react';
import fetchProducts from './getProduct';
import deleteProduct from './deleteProducts';
import updateProduct from './updateProduct';
import addProduct from './addProduct';

import {Alert} from 'react-native';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]); 
  
  
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });



  const [upproduct, setUpproduct] = useState({
    id:'',
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error setting product:', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async productId => {
    try {
      await deleteProduct(productId);
      Alert.alert('Success', 'Product deleted successfully');
      getProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      Alert.alert('Error', 'Failed to delete product');
    }
  };
  const handleAdd = async product => {
    try {
      const newProduct = await addProduct(product);
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
    <ProductsContext.Provider
      value={{products, handleDelete, handleAdd, handleUpdate,product,setProduct,upproduct,setUpproduct}}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
