import {ReactNode} from 'react';

export interface IFirebaseContext {
  signUp: (email: String | null, password: String | null) => void;
  signIn: (email: String | null, password: String | null) => void;
  signOut: (email: String | null, password: String | null) => void;
  postData: (tableName: String | null, msg: String | null) => void;
  getUserData: (tableName: String, id: any) => void;
  getDataWithWhere: (tableName: String, con: Array<any>) => void;
}
export interface IFirebaseProvider {
  children: ReactNode;
}
