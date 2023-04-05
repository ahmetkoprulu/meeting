import { AxiosResponse } from "axios";
import HTTP from "./_client";

const URL = "/meetings";

var service = {
  async createMetting(): Promise<AxiosResponse<any, any>> {
    return await HTTP.post(`${URL}/`);
  },
};

export default service;
