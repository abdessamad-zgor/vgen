import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type Id<T> = { id: string } & T

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getId() {
  return Math.floor(Math.random() * Date.now()).toString(16);
}
