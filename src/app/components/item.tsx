
import { ContactModel, ContactType } from "@/models/contacts.model";
import { ItemModel, ItemSettings, ItemSettingsModel, ItemTypes } from "@/models/item.model";
import Image from "next/image";

export default function Item({ item }: { item: ItemModel }) {
    const getText = (contact: ContactModel) => {
      switch (contact.type) {
        case ContactType.Email:
          return (
            <a className="text" href="mailto:{contact.value}">{contact.value}</a>
          );
        case ContactType.Phone:
          return (
            <a className="text" href="tel:{contact.value}">{contact.value}</a>
          );
        case ContactType.Link:
          return (
            <a className="text" href="{contact.link}">{contact.value}</a>
          );
        case ContactType.Text:
          return (
            <span className="text">{contact.value}</span>
          );
        default:
          return "";
      }
    };

    const getItemContent = () => {
        switch (item.type) {
            case ItemTypes.Contacts:
            const contactList = item.contacts || [];
              return (
                <>
                 <ul className="list">
                    {contactList.map((contact, i) => (
                    <li key={i} className="flex items-center">
                        <span className="icon">
                            <Image
                            src={contact.icon}
                            alt={contact.alt}
                            width={20}
                            height={20}
                            />
                        </span>
                        {getText(contact)}
                    </li>
                  ))}
                </ul>
                </>
              );
              case ItemTypes.Languages:
              case ItemTypes.Skills:
                const skillList = item.skills || [];
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
                case ItemTypes.Hobby:
                const hobbyList = item.hobby || [];
                return (
                    <>
                    <ul className="list flex flex-row items-center justify-stretch flex-wrap">
                        {hobbyList.map((hobby, i) => (                    
                            <li key={i} className="hobbies">
                            <span className="icon">
                                <Image
                                src={hobby.icon}
                                alt={hobby.name}
                                width={20}
                                height={20}
                                />
                            </span>
                            <span className="text">{hobby.name}</span>
                            </li>
                        ))}
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
                                            <h3>{experience.company}, <span>{experience.city}</span></h3>
                                            <p>{experience.country}</p>
                                        </div>
                                        <div className="col">
                                            <span>{experience.startDate}</span> - <span>{experience.endDate !== '' ? experience.endDate : 'PRESENT'}</span>
                                        </div>
                                    </div>
                                   <div className="description">
                                     <p>{experience.description}</p>
                                   </div>
                                    <ul className="work-list">
                                        {experience.descriptionList.map((description, j) => (
                                            <li key={j}>
                                                <div className="flex justify-start flex-wrap">
                                                    <span className="icon">
                                                        <Image
                                                        src="/icons/check.svg"
                                                        alt="checkmark"
                                                        width={20}
                                                        height={20}
                                                        />
                                                    </span>
                                                    <span className="text">{description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
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
                src={getItemSettings()?.icon ?? ""}
                alt={getItemSettings()?.alt ?? ""}
                width={30}
                height={30}
                />
            </span>
            <span className="text">{ getItemSettings()?.title }</span>
            </h2>
            {getItemContent()}
        </div>
    );
}