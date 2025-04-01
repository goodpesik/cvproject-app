import { AxiosResponse } from "axios";
import api from "../lib/api";
import { IStoredUserModel, IUserModel } from "../models/user.model";

export const apiGetUser = (id: string): Promise<AxiosResponse<IStoredUserModel, any>> => {
    return api.get<IStoredUserModel>(`/users/${id}`);
}

export const apiCreateUser = (user: IUserModel): Promise<AxiosResponse<IStoredUserModel, any>> => {
    const userModel: IStoredUserModel = {
        id: user.uid,
        name: user.displayName || '',
        items: [],
    }
    return api.post<IStoredUserModel>(`/users`, userModel);
}