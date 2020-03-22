import { IMetaData } from '../../../../models/IMetaData.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class MetaMat160 implements IMetaData {
  keywords = 'keywords';
  // tslint:disable-next-line: max-line-length
  keywordsContent = 'теплый пол под плитку, теплый пол в слой плиточного клея, кабель в плиточный клей, мат под плитку, warmehaus мат 160 ватт, нагревательный мат, электро теплые полы под плитку';
  description = 'description';
  // tslint:disable-next-line:max-line-length
  descriptionContent = 'WÄRMEHAUS ® Тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм с двойной изоляцией и холодным соединительным проводом длиной 3.5м.';
  ogTitle = 'og:title';
  ogTitleContent = 'Системы теплого пола "Мат 160 Ватт"';
  ogDescription = 'og:description';
  // tslint:disable-next-line:max-line-length
  ogDescriptionContent = 'WÄRMEHAUS ® Тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм с двойной изоляцией и холодным соединительным проводом длиной 3.5м.';
  ogType = 'og:type';
  ogTypeContent = 'website';
  ogImage = 'og:image';
  ogImageContent = '../../../assets/images/WARME_FLOOR_WARMEHAUS_MAT_200W_4_s800_4.jpg';
  ogUrl = 'og:url';
  ogUrlContent = 'https://warmehaus.com.by/mat-160Watt';
}
