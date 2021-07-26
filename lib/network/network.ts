import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  throttleAdapterEnhancer,
  cacheAdapterEnhancer
} from 'axios-extensions';
import { IncomingMessage } from 'http';

export { axios };

const ApiRepository = (
  config?: AxiosRequestConfig,
  isJsonAPI = true
): AxiosInstance => {
  const defaultHeaders = isJsonAPI
    ? {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ['X-Requested-With']: 'XMLHttpRequest',
        ...(config.headers || {})
      }
    : {};

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: defaultHeaders,
    adapter: throttleAdapterEnhancer(
      cacheAdapterEnhancer(axios.defaults.adapter, {
        enabledByDefault: false,
        cacheFlag: 'useCache'
      })
    ),
    ...config
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
        .join(', ');
    }

    if (!error.response.data.message) {
      return "The server doesn't response an specified error message";
    }

    return `${error.response.data.message} \n\r  ${
      error.response.data.detail || ''
    }`;
  } else if (error.message) return error.message;
  else return 'Unknown error happens on the server, try later';
};

export const absoluteUrl = (
  req?: IncomingMessage,
  localhostAddress = 'localhost:3000'
) => {
  let host =
    (req?.headers ? req.headers.host : window.location.host) ||
    localhostAddress;
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:';

  if (
    req &&
    req.headers['x-forwarded-host'] &&
    typeof req.headers['x-forwarded-host'] === 'string'
  ) {
    host = req.headers['x-forwarded-host'];
  }

  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['x-forwarded-proto']}:`;
  }

  return {
    protocol,
    host,
    origin: protocol + '//' + host
  };
};

export default ApiRepository;
