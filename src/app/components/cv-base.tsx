
'use client';
import Image from 'next/image';
import { ItemModel, ItemTypes } from '@/app/models/item.model';
import Item from './item';
import { ICVDataModel } from '../models/cv-data.model';
import { IMAGE_URL } from '../lib/api';

interface CVBaseProps {
  cvData: ICVDataModel
}

export function CVBase({ cvData }: CVBaseProps) {
    const sideItemsList: ItemModel[] = [
        {
            type: ItemTypes.Contacts,
            contacts: cvData.items.contacts
        },
          {
            type: ItemTypes.Skills,
            skills: cvData.items.skills,
          },
          {
            type: ItemTypes.Languages,
            languages: cvData.items.languages,
          },
          {
            type: ItemTypes.Education,
            education: cvData.items.education,
          },
          {
            type: ItemTypes.Hobby,
            hobby: cvData.items.hobby,
          },
    ];

    const mainItemsList: ItemModel[] = [
      {
        type: ItemTypes.Position,
        positionDescription: cvData.items.positionDescription,
      },
      {
        type: ItemTypes.Summary,
        summaryDescription: cvData.items.summaryDescription,
      },
      {
        type: ItemTypes.Experience,
        experience: cvData.items.experience,
      },
    ];

    const getImageUrl = (url: string): string => {
        return `${IMAGE_URL}/${url}`;
      }


    return (
        <>
        <div className="cv-base">
            <div className="flex">
            <aside className="flex flex-col sidebar">
                {cvData.imageUrl ? 
                <div className="image">
                    <Image
                        src={getImageUrl(cvData.imageUrl)}
                        alt="Photo"
                        width={150}
                        height={150}
                        priority
                        className="rounded-full"
                    />
                </div>
                : ''}
                <div className="name-box">
                <h1>
                    <span className="lastname">Levynets</span>
                    <span className="firstname">Maksym</span>
                </h1>
                </div>
                {sideItemsList.map((item, i) => (
                <Item key={i} item={item} />
                ))}
            </aside>
            <main className="flex flex-col main">
                {mainItemsList.map((item, i) => (
                <Item key={i} item={item} />
                ))}
            </main>
            </div>
        </div>
      </>
    );
}