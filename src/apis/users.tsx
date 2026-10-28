import { axiosInstance } from ".";

export const getLoggedUser = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/user/get-logged-user"
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
