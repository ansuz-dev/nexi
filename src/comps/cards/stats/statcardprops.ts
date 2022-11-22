export interface StatCardClasses {
  root?: string;
  photo?: string;
  content?: string;
  name?: string;
  description?: string;
}

export interface StatCardProps {
  stat: unknown;
  classes?: StatCardClasses;
}
