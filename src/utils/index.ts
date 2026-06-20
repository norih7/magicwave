import { siteName, categoryName, CategoryKey } from "@/constants";

export const createMetaTitle = (pageTitle: string) => {
  return `${pageTitle} - ${siteName} テイルズオブエターニア攻略`;
};

export const createParentPageName = (path: CategoryKey) => {
  if (path in categoryName) {
    return categoryName[path];
  }
  return undefined;
};
