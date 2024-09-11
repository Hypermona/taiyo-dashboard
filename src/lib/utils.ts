import { clsx, type ClassValue } from "clsx";
import { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formToData = (event: FormEvent<HTMLFormElement>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {};
  event.preventDefault(); // prevent calling action and reloading the page.
  const constactData = new FormData(event.currentTarget);
  for (const [key, value] of constactData.entries()) {
    data[key] = value;
  }
  return data;
};
