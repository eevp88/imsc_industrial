import type { Headline } from "@/types/Headline";
import type { Form } from "@/types/Form";
import type { Widget } from "@/types/Widget";
export interface Contact extends Omit<Headline,"classes">, Form, Widget {}