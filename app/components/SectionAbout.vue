<template>
  <section id="about" class="sec">
    <div class="wrap">
      <div class="sec__head">
        <p class="sec__no">01</p>
        <p class="sec__en">About us</p>
        <p class="sec__ttl">私たちについて</p>
        <hr class="rule">
      </div>

      <p class="lead">診察室のとなりで、あずかります。</p>
      <p class="body-txt">
        {{ site.hospital }}が運営するペットホテルです。宿泊のお部屋は診療フロアと同じ建物の中にあり、日中は診療スタッフ、夜間は当直スタッフが常にそばにいます。持病のある子、お薬のある子、シニアや子犬・子猫のように「ふつうのホテルでは少し不安」というご家族のために始めました。
      </p>

      <div class="pillars">
        <div v-for="p in pillars" :key="p.title" class="pillar">
          <BaseIcon class="pillar__ic" :name="p.icon" large />
          <h3 class="pillar__ttl">{{ p.title }}</h3>
          <p class="pillar__txt">{{ p.text }}</p>
        </div>
      </div>

      <figure class="figure">
        <img class="ph" :src="aboutImg" alt="ホテルの待合スペースでくつろぐ犬" width="1200" height="900" loading="lazy">
        <figcaption>お迎えとお引き渡しは、診療とは別の専用カウンターで。</figcaption>
      </figure>

      <div class="callout">
        <p class="callout__ttl">ご相談ください</p>
        <p>
          投薬・皮下点滴・療法食の管理、術後や高齢の子のお預かりにも対応しています（内容により事前診察が必要です）。他院に通院中の方も、紹介状または直近の検査結果をお持ちいただければご利用いただけます。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pillars, site } from '~/data/site'
import aboutImg from '~/assets/img/about.jpg'
</script>
