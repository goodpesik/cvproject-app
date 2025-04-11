import { CertificationsModel } from './certifications.model';
import { ContactModel } from './contacts.model';
import { EducationModel } from './education.model';
import { ExperienceModel } from './experience.model';
import { HobbyFormModel } from './hobby.model';
import { IconsSettings } from './icons.settings';
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
  Certifications,
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
  icon: IconsSettings;
}

export const ItemSettings: ItemSettingsModel[] = [
  {
    type: ItemTypes.Contacts,
    title: 'Contacts',
    icon: IconsSettings.Globe,
  },
  {
    type: ItemTypes.Skills,
    title: 'Skills',
    icon: IconsSettings.PieChart,
  },
  {
    type: ItemTypes.Education,
    title: 'Education',
    icon: IconsSettings.Education,
  },
  {
    type: ItemTypes.Hobby,
    title: 'Hobby',
    icon: IconsSettings.Heart,
  },
  {
    type: ItemTypes.Languages,
    title: 'Languages',
    icon: IconsSettings.Language,
  },
  {
    type: ItemTypes.Summary,
    title: 'Summary',
    icon: IconsSettings.Summary,
  },
  {
    type: ItemTypes.Experience,
    title: 'Work Experience',
    icon: IconsSettings.Experience,
  },
  {
    type: ItemTypes.Certifications,
    title: 'Certifications',
    icon: IconsSettings.Cert,
  },
  {
    type: ItemTypes.Position,
    title: 'Desired Position',
    icon: IconsSettings.Target,
  },
];
