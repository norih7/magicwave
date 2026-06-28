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

export const storyLinks = {
  guide1: {
    title: "ラシュアン〜水晶霊の河",
    path: "/stories/guide1",
    desc: "ストーリー開始から大晶霊ウンディーネのいる水晶霊の河までをガイド",
  },
  guide2: {
    title: "いざないの密林〜ファロース",
    path: "/stories/guide2",
    desc: "序盤の難所いざないの密林の攻略情報をチェック",
  },
  guide3: {
    title: "アイメン〜チャットの小屋",
    path: "/stories/guide3",
    image: "/link-headers/stories-guide3.jpg",
    desc: "セレスティア突入後のストーリーガイド 難易度の高いチャットの小屋も解説",
  },
  guide4: {
    title: "ペイルティ〜バリル城",
    path: "/stories/guide4",
    image: "/link-headers/stories-guide4.jpg",
    desc: "雷晶霊の遺跡とバリル城など難易度の高いセレスティアのダンジョンを解説",
  },
  guide5: {
    title: "セイファート神殿〜シゼル城",
    path: "/stories/guide5",
    desc: "エンディングまでガイド シゼル城のダンジョン情報やラストバトルを解説",
  },
};

export const skillLinks = {
  rid: {
    title: "リッドの特技",
    path: "/skills/rid",
    desc: "",
  },
  farth: {
    title: "ファラの特技",
    path: "/skills/farth",
    desc: "",
  },
  chat: {
    title: "チャットの特技",
    path: "/skills/chat",
    desc: "",
  },
  fog: {
    title: "フォッグの特技",
    path: "/skills/fog",
    desc: "",
  },
  magic: {
    title: "晶霊術（メルディ&キール）",
    path: "/skills/magic",
    desc: "",
  },
};

export const subeventLinks = {
  lens: {
    title: "レンズ収集",
    path: "/subevents/lens",
    desc: "",
  },
  catarine: {
    title: "カトリーヌの恋愛",
    path: "/subevents/catarine",
    desc: "",
  },
  kremerball: {
    title: "クレーメルボール",
    path: "/subevents/kremerball",
    desc: "",
  },
  syanballoon: {
    title: "シャンバルーン",
    path: "/subevents/syanballoon",
    desc: "",
  },
  "skill-chat": {
    title: "チャット特技習得",
    path: "/subevents/skill-chat",
    desc: "偶然辿り着くのが難しいチャットの特技習得場所をチェック",
  },
  "skill-fog": {
    title: "フォッグ特技習得",
    path: "/subevents/skill-fog",
    desc: "",
  },
  lysithea: {
    title: "画家リシテア",
    path: "/subevents/lysithea",
    desc: "",
  },
  "flying-boad": {
    title: "飛行艇の入手",
    path: "/subevents/flying-boad",
    desc: "",
  },
  "secret-base": {
    title: "アイフリートアジト",
    path: "/subevents/secret-base",
    desc: "",
  },
  "secret-spirits": {
    title: "隠し大晶霊",
    path: "/subevents/secret-spirits",
    desc: "",
  },
};

export const systemLinks = {
  manual: {
    title: "マニュアル操作/特殊操作",
    path: "/systems/manual",
    desc: "",
  },
  titles: {
    title: "エターニアの称号",
    path: "/systems/titles",
    desc: "",
  },
  // "join-chat-and-fog": {
  //   title: "チャットとフォッグの加入",
  //   path: "/systems/join-chat-and-fog",
  //   desc: "",
  // },
  skill: {
    title: "特技の習得",
    path: "/systems/skill",
    desc: "",
  },
  rune: {
    title: "ルーンボトル/変化表",
    path: "/systems/rune",
    desc: "",
  },
  "tp-reduce": {
    title: "TP減少アクセサリ",
    path: "/systems/tp-reduce",
    desc: "戦闘でバンバン特技や晶霊術を利用できるようになるアクセサリを紹介",
  },
  "master-recipe": {
    title: "マスターレシピ",
    path: "/systems/master-recipe",
    desc: "",
  },
  // "fileld-and-gps": {
  //   title: "特殊なフィールド/GPS",
  //   path: "/systems/fileld-and-gps",
  //   desc: "",
  // },
  // "status-up": {
  //   title: "特殊なステータスアップ",
  //   path: "/systems/status-up",
  //   desc: "",
  // },
  // "special-skill": {
  //   title: "秘奥義/特殊技",
  //   path: "/systems/special-skill",
  //   desc: "",
  // },
};

export const extraLinks = {
  "dark-cave": {
    title: "闇の洞窟",
    path: "/extras/dark-cave",
    desc: "",
  },
  "sunken-ship": {
    title: "沈没船",
    path: "/extras/sunken-ship",
    desc: "",
  },
  aifread: {
    title: "アイフリードの墓",
    path: "/extras/aifread",
    desc: "",
  },
  "farosu-underground": {
    title: "ファロース教会地下",
    path: "/extras/farosu-underground",
    desc: "",
  },
  valkyrie: {
    title: "きらめきの塔",
    path: "/extras/valkyrie",
    desc: "",
  },
};
