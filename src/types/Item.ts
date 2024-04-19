import type { CallToAction } from "@/types/CallToAction";
import type { Image } from "@/types/Image";

export interface Item {
    title?: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
    callToAction?: CallToAction;
    image?: Image;
  }
  