import { ItemModel } from './item.model';

export interface ICVDataModel {
  _id?: string;
  id: string;
  items: ItemModel;
  name: string;
  imageName?: string;
  imageUrl?: string;
  createdBy: string;
  firstName: string;
  lastName: string;
  settings?: CVSettings;
}

export interface ImageStatus {
  imageName: string;
  imageUrl: string;
}

export interface CVSettings {
  bgColor: string;
  textColor: string;
  headingsColor: string;
  font: string;
  textSize: string;
}

export const DefaultSettings: CVSettings = {
  bgColor: '#000',
  textColor: '#000',
  headingsColor: '#000',
  font: `Source Code Pro`,
  textSize: '16px',
};
