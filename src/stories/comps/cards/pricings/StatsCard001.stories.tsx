import React from "react";
import PricingCard001 from "../../../../comps/cards/pricings/PricingCard001";
import {PricingCardProps} from "../../../../comps/cards/pricings/pricingcardprops";

export default {
  title: "Cards/pricings/PricingCard001",
  component: PricingCard001,
};

const Template = (props : PricingCardProps) => (
  <div className="w-80">
    <PricingCard001 {...props} />
  </div>
);

export const SampleCard = Template.bind({});
SampleCard.args = {
  pricing: {
    title: "WC suspendu",
    price: "1190",
    unit: "euros",
    recommended: "LE PLUS POPULAIRE",
    plan: "Installation lavabo à pied et rabinet pour WC ou salle de bain\nFrais de déplacement compris\nInstallation comprise\nMatériel compris",
    linkTitle: "devis gratuit",
    link: "/pricing",
  },
};
