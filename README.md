# XXX動物病院 ペットホテル

1ページ（スクロール型）のペットホテルサイト。Nuxt 4 / Vue 3。

デザインの元データ（アートボード・デザインシステム）は
`../pet-hotel-design/` にあります。

## 使い方

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # SSR 用ビルド → .output/
npm run generate   # 静的書き出し → .output/public/
```

> `.npmrc` で `legacy-peer-deps=true` を設定しています。
> 手元の npm 10.9.2 が Nuxt 4 の peer 解決でクラッシュするための回避策です。
> npm を新しくしたら削除して構いません。

## 構成

```
app/
  app.vue                 セクションの並び順だけを持つ
  assets/css/site.css     デザイントークンと全スタイル（1ファイル）
  components/
    SiteHeader.vue        追従ヘッダー＋モバイルメニュー
    SiteHero.vue          10秒ごとに切り替わる背景（CSSアニメーション）
    SectionAbout.vue
    PetSection.vue        DOG / CAT 共通。data/pets.ts を受け取って描画
    SectionFlow.vue
    SectionAsk.vue        FAQ（details/summary）＋ 連絡先
    SiteFooter.vue
    BaseIcon.vue          SVGアイコン集
  data/
    site.ts               店舗情報・ナビ・3つの強み・ご利用の流れ
    pets.ts               犬猫の個室仕様・1日の流れ・料金・持ち物
    faq.ts                よくあるご質問
public/img/               写真10点
```

**文言と数字はほぼすべて `app/data/` に集めてあります。**
Vueを触らずに内容を差し替えられます。

## 差し替えが必要なもの

- `app/data/site.ts` … 病院名・電話番号・住所・メール・営業時間（すべて仮の値）
- `app/data/pets.ts` … 料金、個室の寸法、1日のスケジュール、持ち物リスト（すべて想定）
- `public/img/*.jpg` … Wikimedia Commons の自由利用素材（CC0 / CC BY / CC BY-SA）。
  CC BY-SA を含むため、公開時は自院で撮影した写真への差し替えを推奨します。
- 「Webフォームで予約する」ボタンの遷移先（現在は `#flow` のまま）

## 実装メモ

- **レスポンシブ**: ブレイクポイントは 700px / 1000px の2つだけ。
  モバイルファーストで、`site.css` の末尾2ブロックに集約しています。
- **ヘッダー追従**: `.site` に `overflow-x: clip` を使っています。
  `hidden` にするとスクロールコンテナが生まれて `position: sticky` が壊れるので変更しないでください。
- **背景の切り替え**: `.hero__slide` の CSS アニメーション（10秒 × 4枚 = 40秒周期）。
  秒数を変えるときは `--slide` ではなく `heroFade` のキーフレームと
  `animation-delay` の両方を揃える必要があります。
- **アンカー**: `<NuxtLink>` ではなく素の `<a href="#...">`。
  vue-router を経由しないので、ブラウザ標準のスムーススクロールがそのまま効きます。
  ヘッダー分のオフセットは `scroll-margin-top` で吸収しています。
- `prefers-reduced-motion` 指定時は背景の切り替えを止めて1枚目を固定表示します。
