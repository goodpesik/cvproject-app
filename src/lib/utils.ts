import { CVSettings } from '@/app/models/cv-data.model';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const applyFont = (currentFontLink: HTMLLinkElement | null, fontFamily: string) => {
  if (currentFontLink) {
      document.head.removeChild(currentFontLink);
    }

    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, '+')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    currentFontLink = link;
    document.documentElement.style.setProperty('--main-cv-font', fontFamily);
}

export const applySettings = (getCvSettings: CVSettings, currentFontLink: HTMLLinkElement | null) => {
  document.documentElement.style.setProperty('--main-cv-bg-color', getCvSettings.bgColor);
  document.documentElement.style.setProperty('--main-cv-headings-color', getCvSettings.headingsColor);
  document.documentElement.style.setProperty('--main-cv-text-color', getCvSettings.textColor);
  document.documentElement.style.setProperty('--main-cv-text-size', getCvSettings.textSize);
  applyFont(currentFontLink, getCvSettings.font);
}


