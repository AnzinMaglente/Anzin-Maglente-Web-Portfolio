import { axiosInstance } from "./index";

export const saveImage = async (image: any) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/image/save-image",
      { image }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getImage = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/image/get-image/:id"
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllUserImages = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/image/get-all-user-images/:userID"
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteImage = async (image: any) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/image/delete-image",
      image
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
