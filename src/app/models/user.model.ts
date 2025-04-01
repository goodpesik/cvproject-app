import { ItemModel } from "./item.model";

export interface IUserModel {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    token: string | null;
};

export interface IStoredUserModel {
    id: string;
    name: string;
    items: ItemModel[];
}

export type UserContextType = {
    user: IUserModel | null;
    setUser: (user: IUserModel | null) => void;
};