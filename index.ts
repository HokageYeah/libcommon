// todo 12
export interface User {
  username: string;
  password: string;
  userid?: number;
  newPassword?: string;
  [key: string]: any;
}

// 成功失败返回类型
export interface ResponseData {
  code: number;
  message: string;
  name?: string;
  data?: any;
}
