import type {
  AxiosStatic,
  CreateAxiosDefaults,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosRequestTransformer,
  AxiosResponse,
  AxiosResponseHeaders,
} from 'axios';

export declare type AxiosStatic = AxiosStatic;
export declare type AxiosInstance = AxiosInstance;
export declare type AxiosRequestConfig = AxiosRequestConfig;
export declare type AxiosRequestHeaders = AxiosRequestHeaders;
export declare type AxiosRequestTransformer = AxiosRequestTransformer;
export declare type AxiosResponse = AxiosResponse;
export declare type AxiosResponseHeaders = AxiosResponseHeaders;

/** 请求体数据结构 */
export declare type AxiosRequestStructure = {
  url: string;
  method: string;
  params: Record<string, unknown> | undefined;
  data: Record<string, unknown> | undefined;
};

/** 响应体返回数据结构 */
export declare type AxiosResponseStructure<Y> = {
  code: number;
  msg: string;
  data: Y;
  request?: AxiosRequestStructure;
};
