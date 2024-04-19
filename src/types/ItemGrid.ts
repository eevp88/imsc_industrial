import type { Item } from "@/types/Item";
export interface ItemGrid {
    items?: Array<Item>;
    columns?: number;
    defaultIcon?: string;
    classes?: Record<string, string>;
  }
  