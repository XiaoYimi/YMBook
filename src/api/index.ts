import type { LoginParams, LoginResult } from '#/api/default';
import request from '@/cores/function/request';

/** 账户登录 */
export const login = (data: LoginParams) =>
  request.send<LoginResult>({
    url: '/login',
    method: 'post',
    data,
  });

/** 获取用户信息 */
export const getUserInfo = (params: LoginParams) =>
  request.send<LoginResult>({
    url: '/userinfo',
    method: 'get',
    params,
  });
