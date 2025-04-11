import { IconsSettings } from './icons.settings';

export enum ContactType {
  Email = 'Email',
  Phone = 'Phone',
  Location = 'Location',
  Text = 'Text',
  Link = 'Link',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  LinkedIn = 'LinkedIn',
  GitHub = 'GitHub',
  Twitter = 'Twitter',
  YouTube = 'YouTube',
  GitLab = 'GitLab',
}

export interface ContactModel {
  type: ContactType;
  value: string;
  link?: string;
}

export const ContactIconsSettings: { type: ContactType; icon: IconsSettings }[] = [
  {
    type: ContactType.Email,
    icon: IconsSettings.Mail,
  },
  {
    type: ContactType.Location,
    icon: IconsSettings.Location,
  },
  {
    type: ContactType.Phone,
    icon: IconsSettings.Phone,
  },
  {
    type: ContactType.Twitter,
    icon: IconsSettings.Twitter,
  },
  {
    type: ContactType.LinkedIn,
    icon: IconsSettings.Linkedin,
  },
  {
    type: ContactType.Instagram,
    icon: IconsSettings.Instagram,
  },
  {
    type: ContactType.Facebook,
    icon: IconsSettings.Facebook,
  },
  {
    type: ContactType.GitHub,
    icon: IconsSettings.Github,
  },
  {
    type: ContactType.YouTube,
    icon: IconsSettings.Youtube,
  },
  {
    type: ContactType.GitLab,
    icon: IconsSettings.Gitlab,
  },
  {
    type: ContactType.Text,
    icon: IconsSettings.Text,
  },
];
