export interface PricingCardClasses {
  root?: string;
  content?: string;
  title?: string;
  price?: string;
  unit?: string;
  plan?: string;
}

export interface PricingCardProps {
  pricing: unknown;
  classes?: PricingCardClasses;
}
