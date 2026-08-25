<template>
  <header class="hdr">
    <div class="hdr__in">
      <a class="brand" href="#top">
        <span class="brand__jp">{{ site.hospital }}</span>
        <span class="brand__en">{{ site.wordmark }}</span>
      </a>

      <nav class="nav" aria-label="メインメニュー">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.en }}</a>
      </nav>

      <a class="hdr__cta" href="#ask">ご予約・お問い合わせ</a>

      <details ref="menu" class="mnav">
        <summary aria-label="メニューを開く">
          <BaseIcon class="mnav__ic-open" name="menu" />
          <BaseIcon class="mnav__ic-close" name="close" />
        </summary>
        <div class="mnav__panel">
          <a v-for="item in nav" :key="item.href" :href="item.href" @click="close">
            {{ item.en }}<span>{{ item.ja }}</span>
          </a>
        </div>
      </details>
    </div>
  </header>
</template>

<script setup lang="ts">
import { nav, site } from '~/data/site'

const menu = useTemplateRef<HTMLDetailsElement>('menu')
const close = () => {
  if (menu.value) menu.value.open = false
}
</script>
