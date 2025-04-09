export interface IUserModel {
  id: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  token: string | null;
}

export interface IStoredUserModel {
  _id: string;
  id?: string;
  name: string;
}

export interface CreatedUserModel {
  id: string;
  name: string;
}

export type UserContextType = {
  user: IUserModel | null;
  setUser: (user: IUserModel | null) => void;
};
