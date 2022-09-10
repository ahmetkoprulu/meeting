import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie } from "../helpers/Cookie";
import { useNavigate } from "react-router-dom";

const conf: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/api/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const sid = getCookie("sid");
if (sid) conf.headers!["sid"] = sid;

const client = axios.create(conf);

client.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => res,
  (err: AxiosError): Promise<AxiosError> => {
    if (err.response?.status === 401) {
      window.location.href = "/sign-in";
    }

    return Promise.reject(err);
  }
);

export default client;
