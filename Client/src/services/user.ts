import { Axios, AxiosResponse } from "axios";
import HTTP from "./_client";

const URL = "/users";

var service = {
  async getUser(id: string): Promise<AxiosResponse<any, any>> {
    return await HTTP.get(`${URL}/${id}`);
  },
  async getCurrentUser(): Promise<AxiosResponse<any, any>> {
    return await HTTP.get(`${URL}/current`);
  },
};

export default service;
