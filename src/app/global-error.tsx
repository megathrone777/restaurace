"use client";
import React from "react";

import { NotFound } from "~/components";

const GlobalError: React.FC = () => (
  <html>
    <body>
      <NotFound />
    </body>
  </html>
);

export default GlobalError;
