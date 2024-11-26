import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";

import { About, Hero, Media, Reviews } from "./components";

const Page: React.FC = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Media />
    <Reviews />
  </React.Fragment>
);

export { generateMetadata } from "./generateMetadata";
export default Page;
