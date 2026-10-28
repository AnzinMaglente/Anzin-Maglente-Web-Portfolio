import axios from "axios";
import { axiosInstance } from "./index";

export const saveArticle = async (article: any) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/article/save-article",
      article
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getArticle = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `http://localhost:5000/article/get-article/${id}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllArticles = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/article/get-all-articles"
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllUserArticles = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/article/get-all-user-articles"
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const editArticle = async (id: string, article: any) => {
  try {
    const response = await axiosInstance.patch(
      `http://localhost:5000/article/edit-article/${id}`,
      article
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteArticle = async (id: string) => {
  try {
    const response = await axiosInstance.delete(
      `http://localhost:5000/article/delete-article/${id}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
