export declare type LoginParams = {
  user: string;
  pass: string;
};

export declare type LoginResult = {
  token: string;
  user: Record<string, undefined> | undefined;
};

export declare type UserInfoResult = {
  token: string;
  roles: string[];
  name: string;
  avatar: string;
};
