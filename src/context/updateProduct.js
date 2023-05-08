import { axiosInstance } from "../utils/utils";

const updateProduct = async (productId, updatedProduct) => {
  try {
    await axiosInstance.put(`products/${productId}`, updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProduct;
