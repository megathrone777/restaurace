import React from "react";
import { notFound } from "next/navigation";

const Page: React.FC = () => {
  notFound();
};

export { metadata } from "./metadata";
export default Page;
