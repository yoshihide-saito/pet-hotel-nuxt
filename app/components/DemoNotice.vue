<template>
  <aside class="demo-notice" role="note" aria-label="デモサイトのお知らせ">
    このサイトは、齊藤由秀がAIで作成した<strong>架空のデモサイト</strong>です。掲載の病院・料金・住所・電話番号などはすべて架空で、実在しません。
  </aside>
</template>

<style>
/* デモであることを常に伝える帯。ヘッダーと重ならないよう画面下に固定する */
.demo-notice {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 8px 16px;
  background: rgba(32, 32, 32, 0.92);
  color: #fff;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}
.demo-notice strong {
  color: #ffd76a;
  font-weight: 700;
}
body {
  padding-bottom: 56px;
}
@media (max-width: 600px) {
  body {
    padding-bottom: 96px;
  }
}
</style>
