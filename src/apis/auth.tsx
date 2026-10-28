import { axiosInstance } from "./index";

export const signinUser = async (user: any) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/auth/signin",
      user
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (user: any) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/auth/login",
      user
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
