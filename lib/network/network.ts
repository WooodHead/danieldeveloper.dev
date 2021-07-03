import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import {
  throttleAdapterEnhancer,
  cacheAdapterEnhancer,
} from "axios-extensions";

export { axios };

const ApiRepository = (config?: AxiosRequestConfig): AxiosInstance => {
  const defaultHeaders = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
    ["X-Requested-With"]: "XMLHttpRequest",
    ...(config.headers || {}),
  };

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: defaultHeaders,
    adapter: throttleAdapterEnhancer(
      cacheAdapterEnhancer(axios.defaults.adapter, {
        enabledByDefault: false,
        cacheFlag: "useCache",
      })
    ),
    ...config,
  });
};

export const isSuccessFullResponse = (status: number) =>
  [200, 201, 204].includes(status);

export const isUnauthorizedResponse = (error: AxiosError) =>
  error.response && [401, 403, 419].includes(error.response.status);

export const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    if (error.response.data.errors) {
      const errors = error.response.data.errors;

      return Object.keys(errors)
        .map((key) => errors[key])
        .join(", ");
    }

    if (!error.response.data.message) {
      return "The server doesn't response an specified error message";
    }

    return `${error.response.data.message} \n\r  ${
      error.response.data.detail || ""
    }`;
  } else if (error.message) return error.message;
  else return "Unknown error happens on the server, try later";
};

export default ApiRepository;
