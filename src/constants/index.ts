export const siteName = "RE:MAGIC";
export const categoryName = {
  none: "",
  skills: "特技/晶霊術",
  stories: "ストーリーガイド",
  systems: "システム解説",
  subevents: "サブイベント",
  extras: "隠しダンジョン",
};

export type CategoryKey = keyof typeof categoryName;
