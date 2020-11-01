import axios, { AxiosResponse } from "axios";
import { http } from "../services/http";
import { URLs } from "../constants/URLs";

export class ProfileService {
  static login = async (login: string, password: string) => {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("password", password);

    const response: AxiosResponse = await http.post(URLs.login, formData, {
      headers: {"Content-Type": "multipart/form-data"},
    });

    return response.data;
  };

  static logout = async (): Promise<boolean> => {
    await axios.post(URLs.logout);

    return true;
  };

  static getProfile = async (): Promise<string> => {
    const response: AxiosResponse = await axios.get(URLs.getProfile);

    return response.data.name;
  };
}