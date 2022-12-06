export interface PartnerCardClasses {
  root?: string;
  photo?: string;
  content?: string;
  name?: string;
  description?: string;
  link?: string;
}

export interface PartnerCardProps {
  partner: unknown;
  classes?: PartnerCardClasses;
}
