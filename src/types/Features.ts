import type { CallToAction } from "@/types/CallToAction";
import type { Headline } from "@/types/Headline";
import type { Widget } from "@/types/Widget";
import type { Video } from "@/types/Video";
import type { Item } from "@/types/Item";


export interface Features extends Omit<Headline,"classes">, Widget {
    image?: string | unknown;
    video?: Video;
    items?: Array<Item>;
    columns?: number;
    defaultIcon?: string;
    callToAction1?: CallToAction;
    callToAction2?: CallToAction;
    isReversed?: boolean;
    isBeforeContent?: boolean;
    isAfterContent?: boolean;
  }