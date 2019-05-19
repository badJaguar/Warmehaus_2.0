import { IItem } from './IItem.interface';

export interface IMatTebleItem extends IItem {
  description?: string;
  picPath?: string;
  picAlt?: string;
}
