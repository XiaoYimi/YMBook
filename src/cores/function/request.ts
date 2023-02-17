import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponseStructure,
  AxiosStatic,
} from '#/config/request';

import { UserStore } from '@/store/lib/user';
import axios from 'axios';

/** 项目请求地址 */
const BASE_URL = import.meta.env.BASE_URL;
const PORT = import.meta.env.BASE_PORT;
const PREFIX = import.meta.env.BASE_PREFIX;
const TOKEN_PREFIX = import.meta.env.TOKEN_PREFIX;
const AXIOS_REQUEST_ADDRESS = `${BASE_URL}:${PORT + PREFIX}`;

export class WebRequest {
  /** axios 实例 */
  public instance: AxiosInstance;
  public defConf: AxiosRequestConfig;
  public userConf: AxiosRequestConfig;

  /** 初始化 axios 实例 */
  constructor(http: AxiosStatic, defConf: AxiosRequestConfig = {}) {
    this.instance = http.create(defConf);
    this.defConf = defConf;
    this.userConf = {};

    this.requestInterceptors();
    this.responseInterceptors();
  }

  /** 自定义用户配置 */
  generateUserConf(config: AxiosRequestConfig = {}) {
    this.userConf = config;
  }

  /** 生成 axios 实例配置 */
  generateInstallConf() {
    return Object.assign(this.defConf, this.userConf);
  }

  /** 请求拦截器 */
  requestInterceptors() {
    this.instance.interceptors.request.use(
      config => {
        const token = UserStore().token;
        token && (config.headers['Authorization'] = `${TOKEN_PREFIX}-${token}`);
        return config;
      },
      error => Promise.reject(error),
    );
  }

  /** 响应拦截器 */
  responseInterceptors() {
    this.instance.interceptors.response.use(
      response => {
        return response;
      },
      error => Promise.reject(error),
    );
  }

  /** 发送请求 */
  async send<T>(
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponseStructure<T>> {
    const reqConf = Object.assign(this.generateInstallConf() ?? {}, config);
    const { data } = await this.instance(reqConf);
    return data;
  }
}

export default new WebRequest(axios, {
  baseURL: AXIOS_REQUEST_ADDRESS,
  timeout: 50000,
});
