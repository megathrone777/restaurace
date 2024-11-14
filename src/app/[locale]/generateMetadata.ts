import { getTranslations } from "next-intl/server";

const generateMetadata: TMetadataFunction = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale });

  return {
    title: `U Dlabačů | ${t("menu.home")}`,
  };
};

export { generateMetadata };
