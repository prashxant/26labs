export type ScrollItemType = "icon" | "feature" | "photo" | "text";

export interface ScrollItem {
  y: number;
  x: number;
  id: number;
  type: ScrollItemType;
  title?: string;
  description?: string;
  text?: string;
  src?: string;

  className?: string; 

  position?: string; 
}

export const scrollItems: ScrollItem[] = [

 

 
];