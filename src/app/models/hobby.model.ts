import { IconsSettings } from './icons.settings';

export interface HobbyModel {
  name: string;
  icon: IconsSettings;
  id: string;
}

export interface HobbyFormModel {
  iconId: string;
}

export const hobySettings: HobbyModel[] = [
  {
    name: 'Reading',
    icon: IconsSettings.Reading,
    id: '778c20d6-f927-4105-b17d-19be263f1527',
  },
  {
    name: 'Traveling',
    icon: IconsSettings.Traveling,
    id: 'ba98fd2d-35a8-476f-9c46-1999d0864b65',
  },
  {
    name: 'Music',
    icon: IconsSettings.Music,
    id: '2d669efd-71c2-4269-8f40-4405e3a81548',
  },
  {
    name: 'Sport',
    icon: IconsSettings.Sport,
    id: '59bc967b-109c-4828-a2fd-caa8dd811e04',
  },
  {
    name: 'Cooking',
    icon: IconsSettings.Cooking,
    id: '6e9198e4-cdff-4100-8890-f5f031df5b14',
  },
  {
    name: 'Photography',
    icon: IconsSettings.Photography,
    id: '2a52c48a-eff3-4238-8ccb-4a147de05391',
  },
  {
    name: 'Dogs',
    icon: IconsSettings.Dog,
    id: 'd01beab4-cb71-4752-86a2-b6904b867c38',
  },
  {
    name: 'Cats',
    icon: IconsSettings.Cat,
    id: 'd49dad93-a431-4bc9-9466-45090048a827',
  },
  {
    name: 'Animals',
    icon: IconsSettings.Paw,
    id: 'a096da6b-f46c-4a3f-9419-401817f136e4',
  },
  {
    name: 'Piano',
    icon: IconsSettings.Piano,
    id: '3d6d4c95-f250-4dbf-b094-15800e0a94aa',
  },
  {
    name: 'Gardening',
    icon: IconsSettings.Gardening,
    id: 'd606d301-bbf3-4523-bb84-0e4dc0d5a269',
  },
  {
    name: 'Writing',
    icon: IconsSettings.Writing,
    id: '43982a18-47e7-47ea-a150-884f77d6ff42',
  },
  {
    name: 'Gaming',
    icon: IconsSettings.Gaming,
    id: 'b6453f0b-0ee6-4912-b71a-5515e7d5ffd2',
  },
  {
    name: 'Hiking',
    icon: IconsSettings.Hiking,
    id: '1d705388-349b-4003-a1c8-4a10f24271d9',
  },
  {
    name: 'Fishing',
    icon: IconsSettings.Fishing,
    id: '810c77b9-e8b1-4d5d-879e-2b7c3abbe6c4',
  },
  {
    name: 'Dancing',
    icon: IconsSettings.Dancing,
    id: '0c5d4746-30c5-4e64-a1be-44c50b6588ee',
  },
  {
    name: 'Astronomy',
    icon: IconsSettings.Astronomy,
    id: 'b9904321-cd09-4e00-8789-1df5e8cc15ac',
  },
  {
    name: 'Cycling',
    icon: IconsSettings.Cycling,
    id: 'a6617051-ed57-41f0-90e2-c03990e900c4',
  },
  {
    name: 'Chess',
    icon: IconsSettings.Chess,
    id: '7af0d4c6-22e9-4e5a-bf89-6ff5804af44e',
  },
  {
    name: 'Robotics',
    icon: IconsSettings.Robotics,
    id: '8efad4f5-c703-499d-b244-be7e73e4c5ba',
  },
];
