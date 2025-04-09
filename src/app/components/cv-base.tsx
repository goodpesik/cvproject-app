
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
            contacts: cvData.items.contacts,
            isShown: !!cvData.items.contacts?.length
        },
          {
            type: ItemTypes.Skills,
            skills: cvData.items.skills,
            isShown: !!cvData.items.skills?.length
          },
          {
            type: ItemTypes.Languages,
            languages: cvData.items.languages,
            isShown: !!cvData.items.languages?.length
          },
          {
            type: ItemTypes.Education,
            education: cvData.items.education,
            isShown: !!cvData.items.education?.length
          },
          {
            type: ItemTypes.Certifications,
            certifications: cvData.items.certifications,
            isShown: !!cvData.items.certifications?.length
          },
          {
            type: ItemTypes.Hobby,
            hobby: cvData.items.hobby,
            isShown: !!cvData.items.hobby?.length
          },
    ];

    const mainItemsList: ItemModel[] = [
      {
        type: ItemTypes.Position,
        positionDescription: cvData.items.positionDescription,
        isShown: cvData.items.positionDescription !== ''
      },
      {
        type: ItemTypes.Summary,
        summaryDescription: cvData.items.summaryDescription,
        isShown: cvData.items.summaryDescription !== ''
      },
      {
        type: ItemTypes.Experience,
        experience: cvData.items.experience,
        isShown: !!cvData.items.experience?.length
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
                    <span className="lastname">{cvData.lastName}</span>
                    <span className="firstname">{cvData.firstName}</span>
                </h1>
                </div>
                {sideItemsList.map((item, i) => {
                  if (item.isShown) {
                    return (<Item key={i} item={item} />)
                  } else {
                    return '';
                  }
                })}
            </aside>
            <main className="flex flex-col main">
                {mainItemsList.map((item, i) => {
                   if (item.isShown) {
                    return (<Item key={i} item={item} />)
                  } else {
                    return '';
                  }
                })}
            </main>
            </div>
        </div>
      </>
    );
}