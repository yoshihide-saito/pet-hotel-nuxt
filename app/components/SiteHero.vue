<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <div v-for="n in 4" :key="n" class="hero__slide" :class="`s${n}`" />
    </div>
    <div class="hero__scrim" aria-hidden="true" />

    <div class="hero__body">
      <p class="eyebrow">{{ site.hospital }} ペットホテル</p>
      <h1 class="hero__ttl">動物病院の中にある、<br>ちいさなホテル。</h1>
      <p class="hero__lead">
        獣医師とスタッフが見守る、完全個室のお預かり。<br>ごはんも、お薬も、いつも通りに。
      </p>
      <div class="hero__acts">
        <a class="btn btn--light" href="#ask">空室を問い合わせる</a>
        <a class="btn btn--outline-light" href="#dog">料金と過ごし方を見る</a>
      </div>
    </div>

    <a class="hero__cue" href="#about"><span>Scroll</span><i /></a>
  </section>
</template>

<script setup lang="ts">
import { site } from '~/data/site'
</script>
