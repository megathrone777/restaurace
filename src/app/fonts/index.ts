import localFont from "next/font/local";

const font = localFont({
  display: "block",
  style: "normal",
  src: [
    {
      path: "./Oswald-Regular.ttf",
      weight: "400",
    },
    {
      path: "./Oswald-Medium.ttf",
      weight: "500",
    },
    {
      path: "./Oswald-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./Oswald-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-oswald",
});

export { font };
