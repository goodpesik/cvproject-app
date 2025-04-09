import { CertificationsModel } from './certifications.model';
import { ContactModel } from './contacts.model';
import { EducationModel } from './education.model';
import { ExperienceModel } from './experience.model';
import { HobbyFormModel } from './hobby.model';
import { SkillModel } from './skills.model';

export enum ItemTypes {
  Contacts,
  Skills,
  Education,
  Hobby,
  Languages,
  Position,
  Experience,
  Summary,
  Certifications
}

export interface ItemModel {
  type: ItemTypes;
  isShown: boolean;
  contacts?: ContactModel[];
  skills?: SkillModel[];
  education?: EducationModel[];
  hobby?: HobbyFormModel[];
  positionDescription?: string;
  summaryDescription?: string;
  experience?: ExperienceModel[];
  certifications?: CertificationsModel[];
  languages?: SkillModel[];
}

export interface ItemSettingsModel {
  type: ItemTypes;
  title: string;
  icon: string;
  alt: string;
}

export const ItemSettings: ItemSettingsModel[] = [
  {
    type: ItemTypes.Contacts,
    title: 'Contacts',
    icon: '/icons/globe.svg',
    alt: 'Contacts',
  },
  {
    type: ItemTypes.Skills,
    title: 'Skills',
    icon: '/icons/pie-chart.svg',
    alt: 'Skills',
  },
  {
    type: ItemTypes.Education,
    title: 'Education',
    icon: '/icons/education.svg',
    alt: 'Education',
  },
  {
    type: ItemTypes.Hobby,
    title: 'Hobby',
    icon: '/icons/heart.svg',
    alt: 'Hobby',
  },
  {
    type: ItemTypes.Languages,
    title: 'Languages',
    icon: '/icons/language.svg',
    alt: 'Languages',
  },
  {
    type: ItemTypes.Summary,
    title: 'Summary',
    icon: '/icons/summary.svg',
    alt: 'Summary',
  },
  {
    type: ItemTypes.Experience,
    title: 'Work Experience',
    icon: '/icons/experience.svg',
    alt: 'Experience',
  },
  {
    type: ItemTypes.Certifications,
    title: 'Certifications',
    icon: '/icons/cert.svg',
    alt: 'Certifications',
  },
  {
    type: ItemTypes.Position,
    title: 'Desired Position',
    icon: '/icons/target.svg',
    alt: 'Position',
  },
];
