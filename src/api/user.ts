import type { LoginParams, LoginResult, UserInfoResult } from '#/api/default';
import request from '@/cores/function/request';

/** 用户登录 */
export const UserLogin = (data: LoginParams) =>
  request.send<LoginResult>({
    url: '',
    method: 'POST',
    data,
  });

/** 获取用户信息 */
export const UserInfo = request.send<UserInfoResult>({
  url: '/user/userinfo',
  method: 'GET',
});
