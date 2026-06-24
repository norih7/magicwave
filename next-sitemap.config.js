/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://remagic.pages.dev", // 実際のドメインに合わせてください
  generateRobotsTxt: true, // robots.txtも自動生成
  outDir: "out", // next build 後の出力先に指定
  // ここで除外設定を行います
  exclude: ["/items/*"],
};
