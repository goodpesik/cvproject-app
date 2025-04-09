'use client';
export const COOKIE_AUTH = 'auth';

export const getCookie = (name: string) => {
  if (typeof window === 'undefined') return;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) {
    return match[2];
  }
};

export const setCookie = (name: string, value: string, domain?: string) => {
  if (typeof window === 'undefined') return;
  const domainString = domain ? `domain=${domain};` : ``;
  document.cookie = `${name}=${value}; path=/; ${domainString} samesite=strict;`;
};

export const deleteCookie = (name: string, domain?: string) => {
  if (typeof window === 'undefined') return;
  const domainString = domain ? `domain=${domain};` : ``;
  document.cookie = `${name}=; path=/; ${domainString} expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
