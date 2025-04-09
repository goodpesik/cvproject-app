export enum ContactType {
  Email = 'Email',
  Phone = 'Phone',
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

export const ContactIconsSettings: {type: ContactType, icon: string, alt: string}[] = [
  {
    type: ContactType.Email,
    icon: '/icons/mail.svg',
    alt: 'email'
  },
  {
    type: ContactType.Text,
    icon: '/icons/location.svg',
    alt: 'Location',
  },
  {
    type: ContactType.Phone,
    icon: '/icons/phone.svg',
    alt: 'Phone',
  },
  {
    type: ContactType.Twitter,
    icon: '/icons/twitter.svg',
    alt: 'twitter',
  },
  {
    type: ContactType.LinkedIn,
    icon: '/icons/linkedin.svg',
    alt: 'linkedin',
  },
  {
    type: ContactType.Instagram,
    icon: '/icons/instagram.svg',
    alt: 'instagram',
  },
  {
    type: ContactType.Facebook,
    icon: '/icons/facebook.svg',
    alt: 'facebook',
  },
  {
    type: ContactType.GitHub,
    icon: '/icons/github.svg',
    alt: 'github',
  },
  {
    type: ContactType.YouTube,
    icon: '/icons/youtube.svg',
    alt: 'youtube',
  },
  {
    type: ContactType.GitLab,
    icon: '/icons/gitlab.svg',
    alt: 'gitlab',
  },
]
