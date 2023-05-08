

import { axiosInstance } from "../utils/utils";



const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get(`products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


export default fetchUsers;