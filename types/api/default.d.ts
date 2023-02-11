export declare type LoginParams = {
  user: string;
  pass: string;
};

export declare type LoginResult = {
  token: string;
  user: Record<string, undefined> | undefined;
};
