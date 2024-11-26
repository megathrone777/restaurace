import { getTranslations } from "next-intl/server";

const generateMetadata: TMetadataFunction = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale });

  return {
    description:
      "Tradiční česká restaurace v centru prahy. Restaurace s klasickou českou kuchyní",
    title: `U Dlabačů | ${t("menu.menu")}`,
  };
};

export { generateMetadata };
