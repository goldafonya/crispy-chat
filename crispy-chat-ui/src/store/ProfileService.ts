import axios, { AxiosResponse } from "axios";
import { http } from "../services/http";

export class ProfileService {
  static login = async (login: string, password: string) => {
    const formData = new FormData();
    formData.append("username", login);
    formData.append("password", password);

    const response: AxiosResponse = await http.post("/api/login", formData, {
      headers: {"Content-Type": "multipart/form-data"}
    });

    return response.data;
  };

  static logout = async (): Promise<boolean> => {
    await axios.post("/api/logout");

    return true;
  };

  static getProfile = async (): Promise<string> => {
    const response: AxiosResponse<any> = await axios.get("/api/user/getProfile");

    return response.data.name;
  };
}