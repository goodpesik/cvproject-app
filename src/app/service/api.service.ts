import { AxiosResponse } from 'axios';
import api from '../lib/api';
import { CreatedUserModel, IStoredUserModel, IUserModel } from '../models/user.model';
import { ICVDataModel, ImageStatus } from '../models/cv-data.model';
import { ImageRemovedModel } from '../models/photo.model';


export const apiGetUser = (id: string): Promise<AxiosResponse<IStoredUserModel[], any>> => {
  return api.get<IStoredUserModel[]>(`/users/${id}`);
};

export const apiCreateUser = (user: IUserModel): Promise<AxiosResponse<IStoredUserModel, any>> => {
  const userModel: CreatedUserModel = {
    id: user.uid,
    name: user.displayName || '',
  };
  return api.post<IStoredUserModel>(`/users`, userModel);
};

export const apiCreateCV = (data: ICVDataModel): Promise<AxiosResponse<ICVDataModel, any>> => {
  return api.post<ICVDataModel>(`/cv-data`, data);
}

export const apiUpdateCV = (id: string, data: ICVDataModel): Promise<AxiosResponse<ICVDataModel, any>> => {
  return api.put<ICVDataModel>(`/cv-data/${id}`, data);
}

export const apiDeleteeCV = (id: string): Promise<AxiosResponse<ICVDataModel, any>> => {
  return api.delete<ICVDataModel>(`/cv-data/${id}`);
}

export const apiGetCVByUser = (user: IUserModel): Promise<AxiosResponse<ICVDataModel[], any>> => {
  return api.get<ICVDataModel[]>(`/cv-data/all/${user.id}`);
}

export const apiGetCVById = (id: string, key?: boolean): Promise<AxiosResponse<ICVDataModel, any>> => {
  return api.get<ICVDataModel>(`/cv-data/${id}`, {
    isKey: key
  });
}

export const uploadPhoto = (image: Blob | null, isEdit: boolean, cvId: string): Promise<AxiosResponse<ImageStatus, any>> => {
  const formData = new FormData();
  formData.append('file', image as Blob);

  return api.post<ImageStatus>(`/cv-data/photo?isEdit=${isEdit}&cvId=${cvId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const removePhoto = (name: string, isEdit: boolean, cvId: string): Promise<AxiosResponse<ImageRemovedModel, any>> => {
  return api.delete<ImageRemovedModel>(`/cv-data/photo/${name}?isEdit=${isEdit}&cvId=${cvId}`);
}

export const apiDownloadPdf = (url: string): Promise<Blob> => {
  return api.post(`/pdf/generate?url=${url}`, null, {
    responseType: 'blob',
  }).then(res => res.data);
}




