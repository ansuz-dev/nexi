import React from "react";
import Head from "next/head";
import SEOItem from "../comps/items/common/SEOItem";
import Button001 from "../comps/items/buttons/Button001";
import ServiceCard003 from "../comps/cards/services/ServiceCard003";
import GallerySection001 from "../comps/sections/galleries/GallerySection001";
import GallerySection002 from "../comps/sections/galleries/GallerySection002";
import Navbar001 from "../comps/sections/navbars/Navbar001";
import Footer001 from "../comps/sections/footers/Footer001";

import "swiper/css";
import "swiper/css/pagination";
import GallerySection from "../comps/sections/galleries/GallerySection";
import PreviewSection001 from "../comps/sections/previews/PreviewSection001";

const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SEOItem />

    {/* <Navbar001
      active="/link-1"
      data={{
        logo: {data: {attributes: {url: "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc"}}},
        links: [
          {title: "Home", link: "/link-1"},
          {title: "Rénovation", link: "/link-2"},
          {title: "Dépannage", link: "/link-2"},
          {title: "Le groupe 24/7 HESTIA", link: "/link-2"},
          {title: "Tarifs", link: "/link-2"},
        ],
        rightLinks: [
          {title: "01 83 64 12 15", link: "tel:01 83 64 12 15"},
        ],
      }}
    /> */}

    <main>

      <div>
        <Button001
          link
          label="Click me"
          href="/test"
          type="outlined"
        />

        <div className="w-80">
          <ServiceCard003
            service={{
              name: "Lorem ipsum dolor sit amen",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              photo: {data: {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}},
            }}
          />
        </div>

        <div>
          {/* <GallerySection
            layout="gs001"
            data={{
              title: "Gallery",
              photos: {
                data: [
                  {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
                  {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
                  {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
                  {attributes: {url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}},
                ],
              },
            }}
          /> */}
        </div>
      </div>

      <PreviewSection001
        data={{
          title: "Gallery",
          document: {data: {attributes: {url: "https://cms.hestiaecobat.fr/uploads/sample_b76d581c36.pdf"}}},
        }}
      />
    </main>

    <Footer001
      data={{
        logo: {data: {attributes: {url: "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc"}}},
        photo: {data: {attributes: {url: "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc"}}},
        links: [
          {title: "Home", link: "/link-1"},
          {title: "Rénovation", link: "/link-2"},
          {title: "Dépannage", link: "/link-2"},
          {title: "Le groupe 24/7 HESTIA", link: "/link-2"},
          {title: "Tarifs", link: "/link-2"},
        ],
        addresses: [
          {title: "Siège social", address: "103 boulevard Mad donald 75019 PARIS"},
          {title: "Pole Administratif", address: "1 rue Marceau 93100 MONTREUIL"},
        ],
        contacts: [
          {name: "PARIS/IDF", phone: "01 83 64 12 15", email: "contact@hestiaecobat.com"},
        ],
        socialLinks: {
          facebook: "https://facebook.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          youtube: "https://youtube.com",
          instagram: "https://instagram.com",
        },
        copyright: "© 2022 Hestia Eco Bat. All rights reserved.",
      }}
    />
  </div>
);

export default Home;
