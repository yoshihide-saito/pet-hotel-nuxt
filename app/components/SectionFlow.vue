<template>
  <section id="flow" class="band band--flow">
    <div class="band__bg" aria-hidden="true" />
    <div class="band__scrim" aria-hidden="true" />
    <div class="band__in">
      <p class="sec__no">04</p>
      <p class="sec__en">Flow</p>
      <p class="sec__ttl">ご利用の流れ</p>
      <hr class="rule">
      <p class="band__lead">はじめての方は、お預かりの前に一度お会いします。</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="steps">
        <div v-for="s in steps" :key="s.n" class="step">
          <div class="step__n">{{ s.n }}</div>
          <div>
            <h3 class="step__ttl">{{ s.title }}</h3>
            <p class="step__d">{{ s.desc }}</p>
          </div>
        </div>
      </div>

      <div class="two">
        <div class="card">
          <h3 class="card__ttl"><BaseIcon name="calendar" />ご予約について</h3>
          <ul class="kv">
            <li v-for="r in reservation" :key="r.k">
              <b>{{ r.k }}</b><span><em>{{ r.v }}</em></span>
            </li>
          </ul>
          <p>
            お預かりできる頭数に限りがあるため、連休はお早めにご相談ください。キャンセルは前日まで無料、当日は宿泊料金の50%を申し受けます。
          </p>
        </div>

        <div class="card">
          <h3 class="card__ttl"><BaseIcon name="clock" />チェックイン・チェックアウト</h3>
          <ul class="kv">
            <li v-for="r in checkInOut" :key="r.k">
              <b>{{ r.k }}</b><span><em>{{ r.v }}</em></span>
            </li>
          </ul>
          <p>
            チェックインは診療とは別の専用カウンターで承ります。初回は問診票の記入があるため、15分ほどお時間をみてお越しください。お迎えの際は、その日の様子をスタッフから直接お伝えします。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { steps, reservation, checkInOut } from '~/data/site'
</script>
