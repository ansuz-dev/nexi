export interface ServiceCardClasses {
  root?: string;
  photo?: string;
  content?: string;
  name?: string;
  description?: string;
  link?: string;
}

export interface ServiceCardProps {
  service: unknown;
  classes?: ServiceCardClasses;
}
