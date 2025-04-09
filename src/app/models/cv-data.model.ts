import { ItemModel } from './item.model';

export interface ICVDataModel {
  _id?: string;
  id: string;
  items: ItemModel;
  name: string;
  imageName?: string;
  imageUrl?: string;
  createdBy: string;
}

export interface ImageStatus {
  imageName: string;
  imageUrl: string;
}
