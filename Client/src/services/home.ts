import { Axios, AxiosResponse } from "axios";
import HTTP from "./_client";

const URL = "";

var service = {
  async signIn(model: any): Promise<AxiosResponse<any, any>> {
    return await HTTP.post(`${URL}/sign-in`, model);
  },
  async signUp(model: any): Promise<AxiosResponse<any, any>> {
    return await HTTP.post(`${URL}/sign-up`, model);
  },
  async logout(model: any): Promise<AxiosResponse<any, any>> {
    return await HTTP.post(`${URL}/logout`);
  },
};

export default service;
