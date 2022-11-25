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
    photo: {data: {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}},
    quotes: [
      {
        person: "Rose, Fondatrice de HESTIA ECOBAT",
        quote: "Nous somme fiers de pouvoir fournir à nos clients des prestations qui respectent toujours nos deux fondamentaux: DES PROFESSIONNELS ET DES GARANTIES",
      },
    ],
  },
};
