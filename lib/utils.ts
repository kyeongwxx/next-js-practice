import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number): Promise<void> => {
  return new Promise((res) => setTimeout(res, ms));
};

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElementFromArray(arr: any[]) {
  const length = arr?.length;
  return arr[getRandomInt(0, length - 1)];
}
