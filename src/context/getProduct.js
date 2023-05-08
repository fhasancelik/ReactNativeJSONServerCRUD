

import { axiosInstance } from "../utils/utils";



const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(`products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export default fetchProducts;
