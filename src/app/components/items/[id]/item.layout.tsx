import { ContactModel, ContactType } from "@/app/models/contacts.model";
import Image from "next/image";
import { SkillModel } from "@/app/models/skills.model";
import { ItemModel, ItemTypes } from "@/app/models/item.model";
import Item from "../../item";
import { hobySettings } from "@/app/models/hobby.model";
import { ExperienceModel } from "@/app/models/experience.model";
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const contactList: ContactModel[] = [
    {
      type: ContactType.Email,
      value: "levinets@gmail.com",
      icon: "/icons/mail.svg",
      alt: "Email",
    },
    {
      type: ContactType.Text,
      value: "Lviv, Ukraine",
      icon: "/icons/location.svg",
      alt: "Location",
    },
    {
      type: ContactType.Phone,
      value: "+380960597562",
      icon: "/icons/phone.svg",
      alt: "Phone",
    },
    {
      type: ContactType.Link,
      value: "@goodpesyk",
      icon: "/icons/twitter.svg",
      link: "https://x.com/goodpesyk",
      alt: "twitter",
    },
    {
      type: ContactType.Link,
      value: "linkedin.com/in/goodpesik",
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/goodpesik/",
      alt: "linkedin",
    },
    {
      type: ContactType.Link,
      value: "@goodpesyk",
      icon: "/icons/instagram.svg",
      link: "https://www.instagram.com/goodpesyk/",
      alt: "instagram",
    },
  ];
  
  const langList: SkillModel[] = [
    {
      name: "Ukrainian",
      level: 100,
    },
    {
      name: "English",
      level: 85,
    },
  ];
  
  const skillsList: SkillModel[] = [
    {
      name: "JavaScript",
      level: 100,
    },
    {
      name: "TypeScript",
      level: 100,
    },
    {
      name: "Angular",
      level: 100,
    },
    {
      name: "React (next.js)",
      level: 75,
    },
    {
      name: "Vue",
      level: 65,
    },
    {
      name: "Node.js (Nest.js)",
      level: 60,
    },
    {
      name: "PostgreSQL",
      level: 60,
    },
    {
      name: "MongoDB",
      level: 60,
    },
    {
      name: "HTML/CSS/SCSS",
      level: 100,
    },
  ];
  
  const educationList = [
    {
      degree: "Junior Bachelor",
      school: "Bakhmut College of Transport Infrastructure",
      year: "2025 - 2027",
      country: "Ukraine",
    },
  ];
  
  const sideItemsList: ItemModel[] = [
    {
      type: ItemTypes.Contacts,
      contacts: contactList,
    },
    {
      type: ItemTypes.Skills,
      skills: skillsList,
    },
    {
      type: ItemTypes.Languages,
      skills: langList,
    },
    {
      type: ItemTypes.Education,
      education: educationList,
    },
    {
      type: ItemTypes.Hobby,
      hobby: hobySettings,
    }
  ];
  
  const experienceList: ExperienceModel[] = [
    {
      company: "GlobalLogic Ukraine",
      startDate: "2020",
      endDate: '',
      city: "Lviv",
      country: "Ukraine",
      role: "Lead Front-End Developer",
      description: `Client is a leading provider of point-of-sale and tunnel technology solutions for the car wash industry.`,
      descriptionList: [
        `Developed a new Angular-based web application for the client's car wash management system.`,
        `Implemented a new feature that allows users to view and manage car wash data in real-time.`,
        `Collaborated with the back-end team to integrate the front-end application with the client's existing APIs.`,
      ],
    },
    {
      company: "Exadel",
      startDate: "2019",
      endDate: "2020",
      city: "Kharkiv",
      country: "Ukraine",
      role: "Senior Front-End Developer",
      description: `Client is a leading provider of financial services and software solutions for the banking industry.`,
      descriptionList: [
        `Developed a new Angular web application for the finance platform.`,
        `Collaborated with the ML team to integrate machine learning algorithms into the front-end application.`,
        `Worked closely with the UX team to ensure a seamless user experience for the client's customers.`,
      ],
    },
    {
      company: "GlobalLogic Ukraine",
      startDate: "2018",
      endDate: "2019",
      city: "Kharkiv",
      country: "Ukraine",
      role: "Senior Front-End Developer",
      description: `Client is provider of security and surveillance solutions for the retail industry.`,
      descriptionList: [
        `Worked with AngularJS 1.7 and Angular 7`,
        `Developed a new web application for the client's security platform.`,
        `Collaborated with the back-end team to integrate the front-end application with the client's existing APIs.`,
        `Help to create and estimate new user stories, clarify requirements with client`
      ]
    },
    {
      company: "Telenor DK (Team International)",
      startDate: "2015",
      endDate: "2018",
      city: "Kharkiv",
      country: "Ukraine",
      role: "Front-End Developer",
      description: `Client is a leading provider of telecommunications services in Denmark.`,
      descriptionList: [
        `Developed a new web application for the client's customer portal.`,
        `Collaborated with the back-end team to integrate the front-end application with the client's existing APIs.`,
        `Working with product owners and sales managers, discussing business needs and suggesting the best UI solutions`,
        `With Front-end team we've provided BEM metodology for Client, developed own grid system and optimised a mobile version of site.`,
        `Developed concept blocks constructor for content editors based on Episerver CMS.`,
        `Working with razor view engine(cshtml views) and C# syntax`,
        `Developed custom Javascript components (carousels,sliders,tabs and ect.)`
      ],
    },
    {
      company: "PSD2HTML",
      startDate: "2014",
      endDate: "2015",
      city: "Kharkiv",
      country: "Ukraine",
      role: "Front-End Developer",
      description: `Company is a leading provider of PSD to HTML conversion services.`,
      descriptionList: [
        `Worked on small (1 - 20 pages) projects as full stack Front-end (Markup, JavaScript, CMS - Wordpress/Drupal)`,
      ],
    },
    {
      company: "PSD2HTML",
      startDate: "2011",
      endDate: "2014",
      city: "Kharkiv",
      country: "Ukraine",
      role: "Markup Team Leader",
      description: `Company is a leading provider of PSD to HTML conversion services.`,
      descriptionList: [
        `Research and use of new Web technologies`,
        `Code Quality control`,
        `Search for the best solutions to complex bugs and other problems.`,
        `Advising Project Managers on technical issues`
      ],
    },
    {
      company: "PSD2HTML",
      startDate: "2009",
      endDate: "2011",
      city: "Kharkiv",
      country: "Ukraine",
      role: "HTML/CSS Developer",
      description: `Company is a leading provider of PSD to HTML conversion services.`,
      descriptionList: [
        `Evolve from Junior to Senior level`,
        `The main tasks were to convert PSD layouts to HTML/CSS`,
        `Worked with JavaScript and jQuery`,
        `Worked with CMS - Wordpress/Drupal`
      ],
    }
  ];
  
  const mainItemsList: ItemModel[] = [
    {
      type: ItemTypes.Position,
      positionDescription: "Lead/Senior Sofrware Engineer",
    },
    {
      type: ItemTypes.Summary,
      summaryDescription: `I am a seasoned Front-End Developer with 15+ years of experience delivering complex
        projects. Proficient in JavaScript (including TypeScript) and HTML/CSS, with hands-on
        expertise in Angular, React, and Vue. I also possess complementary back-end
        development experience with Node.js and Nest, enabling a well-rounded approach to
        software solutions. My strengths include strong problem-solving skills, a keen eye for
        detail, and a collaborative mindset to ensure successful project outcomes.`,
    },
    {
      type: ItemTypes.Experience,
      experience: experienceList,
    }
  ];

interface ItemPageProps {
    params: { id: string };
  }
  
  export default async function ItemPage({ params }: ItemPageProps) {
    const { id } = params;
  
  
    const res = await fetch(`http://localhost:3000/api/items/${id}`);
    const item = await res.json();

    const contentRef = useRef(null);
  
    const exportToPDF = async () => {
      const element = contentRef.current;
      if (element) {
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
          allowTaint: false,
          backgroundColor: null
        });
        const imgData = canvas.toDataURL('image/png');


        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        while (position < imgHeight) {
          pdf.addImage(imgData, 'PNG', 0, position * -1, imgWidth, imgHeight);
          position += pageHeight;
          if (position < imgHeight) pdf.addPage();
        }

        pdf.save('page.pdf');
      }
    };
  
     <>
        <div ref={contentRef} className="flex">
          <aside className="flex flex-col sidebar">
            <div className="image">
              <Image
                  src="/images/photo.png"
                  alt="Photo"
                  width={150}
                  height={150}
                  priority
                  className="rounded-full"
                />
            </div>
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
        </>
  }
  