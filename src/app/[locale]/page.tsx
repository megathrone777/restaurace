import React from "react";

import { About, Hero } from "~/components";

const Page: React.FC = () => (
  <React.Fragment>
    <Hero />
    <About />
  </React.Fragment>
);

export { generateMetadata } from "./generateMetadata";
export default Page;
