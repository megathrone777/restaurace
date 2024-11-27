import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Media } from "~/components";
import { About, Hero, Reviews } from "./components";

const Page: React.FC = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Media />
    <Reviews />
  </React.Fragment>
);

export { metadata } from "./metadata";
export default Page;
