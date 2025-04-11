import { ContactModel, ContactType } from '@/app/models/contacts.model';
import { ItemModel, ItemSettings, ItemSettingsModel, ItemTypes } from '@/app/models/item.model';
import Image from 'next/image';
import { ContactIconsSettings } from '../models/contacts.model';
import { hobySettings } from '../models/hobby.model';
import { SkillModel } from '../models/skills.model';
import { Icon } from './icon';
import { IconsSettings } from '../models/icons.settings';

export default function Item({ item }: { item: ItemModel }) {
  const getText = (contact: ContactModel) => {
    switch (contact.type) {
      case ContactType.Email:
        return (
          <a className="text" href="mailto:{contact.value}">
            {contact.value}
          </a>
        );
      case ContactType.Phone:
        return (
          <a className="text" href="tel:{contact.value}">
            {contact.value}
          </a>
        );
      case ContactType.Link:
        return (
          <a className="text" href="{contact.link}">
            {contact.value}
          </a>
        );
      case ContactType.Text:
        return <span className="text">{contact.value}</span>;
      default:
        return <span className="text">{contact.value}</span>;
    }
  };

  const getContactIcon = (type: ContactType): { name: IconsSettings;} => {
    const settings = ContactIconsSettings.find((s) => s.type === type);

    return {
      name: settings!.icon,
    };
  };

  const getHobbyIcon = (id: string): { url: string; alt: string } => {
    const settings = hobySettings.find((s) => s.id === id);

    return {
      url: settings!.icon,
      alt: settings!.name,
    };
  };

  const getSkillsContent = (skillList: SkillModel[]) => {
    return (
      <>
        <ul className="list skill-bar">
          {skillList.map((skill, i) => (
            <li key={i} className="flex items-center">
              <span className="text">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const getItemContent = () => {
    switch (item.type) {
      case ItemTypes.Contacts:
        const contactList = item.contacts || [];
        return (
          <>
            <ul className="list">
              {contactList.map((contact, i) => {
                const imageData = getContactIcon(contact.type);
                return (
                  <li key={i} className="flex items-center">
                    <span className="icon">
                      <Icon name={imageData.name} width={20} height={20}/>
                    </span>
                    {getText(contact)}
                  </li>
                );
              })}
            </ul>
          </>
        );
      case ItemTypes.Languages:
        return getSkillsContent(item.languages || []);
      case ItemTypes.Skills:
        return getSkillsContent(item.skills || []);

      case ItemTypes.Education:
        const educationList = item.education || [];
        return (
          <>
            <ul className="list">
              {educationList.map((education, i) => (
                <li key={i} className="flex items-center">
                  <span className="text">{education.degree}</span>
                  <span className="text">{education.school}</span>
                  <span className="text">{education.year}</span>
                  <span className="text">{education.city}</span>
                  <span className="text">{education.country}</span>
                </li>
              ))}
            </ul>
          </>
        );
      case ItemTypes.Certifications:
        const certificationsList = item.certifications || [];
        return (
          <>
            {certificationsList.map((certifications, i) => (
              <div key={i} className="work-item container">
                <div className="description">
                  <p>{certifications.details}</p>
                </div>
              </div>
            ))}
          </>
        );

      case ItemTypes.Hobby:
        const hobbyList = item.hobby || [];
        return (
          <>
            <ul className="list flex flex-row items-center justify-stretch flex-wrap">
              {hobbyList.map((hobby, i) => {
                const hobbyIcon = getHobbyIcon(hobby.iconId);
                return (
                  <li key={i} className="hobbies">
                    <span className="icon">
                      <Image src={hobbyIcon.url} alt={hobbyIcon.alt} width={20} height={20} />
                    </span>
                    <span className="text">{hobbyIcon.alt}</span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      case ItemTypes.Position:
        return (
          <>
            <h2>{item.positionDescription}</h2>
          </>
        );
      case ItemTypes.Summary:
        return (
          <>
            <div className="container">
              <p>{item.summaryDescription}</p>
            </div>
          </>
        );
      case ItemTypes.Experience:
        const experienceList = item.experience || [];
        return (
          <>
            {experienceList.map((experience, i) => (
              <div key={i} className="work-item container">
                <div className="head flex items-start justify-between">
                  <div className="col">
                    <h3>
                      {experience.company}, <span>{experience.city}</span>
                    </h3>
                    <p>{experience.country}</p>
                  </div>
                  <div className="col">
                    <span>{experience.startDate}</span> -{' '}
                    <span>{experience.endDate !== '' ? experience.endDate : 'PRESENT'}</span>
                  </div>
                </div>
                <div className="description">
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </>
        );
    }
  };

  const getItemSettings = (): ItemSettingsModel | undefined => {
    return ItemSettings.find((x) => x.type === item.type);
  };

  return (
    <div className="item">
      <h2 className="flex items-center">
        <span className="icon">
          <Image
            src={getItemSettings()?.icon ?? ''}
            alt={getItemSettings()?.alt ?? ''}
            width={30}
            height={30}
          />
        </span>
        <span className="text">{getItemSettings()?.title}</span>
      </h2>
      {getItemContent()}
    </div>
  );
}
