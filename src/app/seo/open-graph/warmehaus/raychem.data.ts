import { Injectable } from '@angular/core';
import { IMetaData } from '../../../../models/IMetaData.interface';

@Injectable()
export class MetaRaychem implements IMetaData {
  keywords = 'keywords';
  // tslint:disable-next-line: max-line-length
  keywordsContent = 'теплый пол в стяжку, кабель в стяжку, кабель для кровли, отопление крыши, warmehaus cab 20w, прогреть кровлю, толщина стяжки для теплого пола, стяжка для теплого пола, обогрев водостоков, отопить водосток, убрать наледь электрическим теплым полом, обогрев дорожек, обогрев ступеней, прогреть ступени, обогрев крыльца';
  description = 'description';
  // tslint:disable-next-line:max-line-length
  descriptionContent = 'Греющий кабель DEVI flex 18T представляет собой изготовленную в заводских условиях нагревательную секцию. Такой греющий кабель DEVI flex 18T подходит как для комфортного, так и для полного обогрева помещений со сложной конфигурацией.';
  ogTitle = 'og:title';
  ogTitleContent = 'Теплые полы Raychem дешево';
  ogDescription = 'og:description';
  // tslint:disable-next-line:max-line-length
  ogDescriptionContent = 'Греющий кабель DEVI flex 18T представляет собой изготовленную в заводских условиях нагревательную секцию. Такой греющий кабель DEVI flex 18T подходит как для комфортного, так и для полного обогрева помещений со сложной конфигурацией.';
  ogType = 'og:type';
  ogTypeContent = 'website';
  ogImage = 'og:image';
  ogImageContent = '../../../assets/images/anti-icing/pipes-warming.jpg';
  ogUrl = 'og:url';
  ogUrlContent = 'https://warmehaus.com.by/raychem';
}
