<template>
  <footer class="ftr">
    <a class="totop" href="#top"><BaseIcon name="arrowUp" />Back to top</a>

    <a class="brand ftr__brand" href="#top">
      <span class="brand__jp">{{ site.hospital }}</span>
      <span class="brand__en">{{ site.wordmark }}</span>
    </a>

    <nav class="ftr__nav" aria-label="フッターメニュー">
      <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.en }}</a>
    </nav>

    <p class="ftr__meta">
      {{ site.zip }} {{ site.address }} {{ site.building }} ／ TEL {{ site.tel }}<br>{{ site.copyright }}
    </p>
    <p class="ftr__credit">
      掲載写真はWikimedia Commonsの自由利用素材（CC0 / CC BY / CC BY-SA）を用いたデザイン確認用の仮画像です。公開時は自院で撮影した写真に差し替えてください。
    </p>
  </footer>
</template>

<script setup lang="ts">
import { nav, site } from '~/data/site'
</script>
