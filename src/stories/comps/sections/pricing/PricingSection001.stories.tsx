import React from "react";
import PricingSection001 from "../../../../comps/sections/pricings/PricingSection001";
import {PricingSectionProps} from "../../../../comps/sections/pricings/pricingsectionprops";

export default {
  title: "Sections/Pricings/PricingSection001",
  component: PricingSection001,
};

const Template = (props : PricingSectionProps) => (
  <div>
    <PricingSection001 {...props} />
  </div>
);

export const SampleSection = Template.bind({});
SampleSection.args = {
  data: {
    title: "Lorem ipsum dolor sit amen",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    plans: [
      {
        title: "WC suspendu",
        price: "1190",
        unit: "euros",
        plan: "Installation lavabo à pied et rabinet pour WC ou salle de bain\nFrais de déplacement compris\nInstallation comprise\nMatériel compris",
        linkTitle: "devis gratuit",
        link: "/pricing",
      },
      {
        title: "WC suspendu",
        price: "1190",
        unit: "euros",
        recommended: "LE PLUS POPULAIRE",
        plan: "Installation lavabo à pied et rabinet pour WC ou salle de bain\nFrais de déplacement compris\nInstallation comprise\nMatériel compris",
        linkTitle: "devis gratuit",
        link: "/pricing",
      },
      {
        title: "WC suspendu",
        price: "1190",
        unit: "euros",
        plan: "Installation lavabo à pied et rabinet pour WC ou salle de bain\nFrais de déplacement compris\nInstallation comprise\nMatériel compris",
        linkTitle: "devis gratuit",
        link: "/pricing",
      },
      {
        title: "WC suspendu",
        price: "1190",
        unit: "euros",
        plan: "Installation lavabo à pied et rabinet pour WC ou salle de bain\nFrais de déplacement compris\nInstallation comprise\nMatériel compris",
        linkTitle: "devis gratuit",
        link: "/pricing",
      },
    ],
    links: [
      {
        title: "demandez votre devis gratuit",
        link: "/click-me",
      },
      {
        title: "107 56 79 55 56",
        link: "/click-me",
      },
    ],
  },
  classes: {root: "bg-grey-100"},
};
