import React from "react";
import QuoteSection001 from "../../../../comps/sections/quotes/QuoteSection001";
import {QuoteSectionProps} from "../../../../comps/sections/quotes/quotesectionprops";

export default {
  title: "Sections/Quotes/QuoteSection001",
  component: QuoteSection001,
};

const Template = (props : QuoteSectionProps) => (
  <div>
    <QuoteSection001 {...props} />
  </div>
);

export const SampleSection = Template.bind({});
SampleSection.args = {
  data: {
    title: "LE GROUPE 24/7 HESTIA",
    subtitle: "— une entreprise familiale",
    background: "gray",
    photo: {data: {attributes: {url: "https://cms.hestiaecobat.fr/uploads/IMG_1925_1_0535f4e75e.png"}}},
    quotes: [
      {
        person: "Rose, Fondatrice de HESTIA ECOBAT",
        quote: "Nous somme fiers de pouvoir fournir à nos clients des prestations qui respectent toujours nos deux fondamentaux: DES PROFESSIONNELS ET DES GARANTIES",
      },
    ],
  },
};
