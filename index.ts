// todo 12
export interface User {
  username: string;
  password: string;
  userid?: number;
  newPassword?: string;
  [key :string]: any
}
