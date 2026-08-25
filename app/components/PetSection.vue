<template>
  <section :id="pet.id" class="band" :class="`band--${pet.id}`">
    <div class="band__bg" aria-hidden="true" />
    <div class="band__scrim" aria-hidden="true" />
    <div class="band__in">
      <p class="sec__no">{{ pet.no }}</p>
      <p class="sec__en">{{ pet.en }}</p>
      <p class="sec__ttl">{{ pet.ja }}</p>
      <hr class="rule">
      <p class="band__lead">{{ pet.bandLead }}</p>
    </div>
  </section>

  <section class="sec" :class="{ 'sec--tint': pet.tint }">
    <div class="wrap">
      <!-- 個室 -->
      <div class="block">
        <div class="block__head">
          <p class="block__en">Private room</p>
          <h3 class="block__ttl">{{ pet.room.title }}</h3>
        </div>
        <div class="room">
          <img class="ph room__img" :src="pet.room.img" :alt="pet.room.alt" width="1200" height="800" loading="lazy">
          <div class="room__txt">
            <p v-for="(t, i) in pet.room.paragraphs" :key="i">{{ t }}</p>
            <ul class="spec">
              <li v-for="s in pet.room.specs" :key="s.label">
                <b>{{ s.label }}</b><span>{{ s.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 1日の過ごし方 -->
      <div class="block">
        <div class="block__head">
          <p class="block__en">One day</p>
          <h3 class="block__ttl">1日の過ごし方（例）</h3>
        </div>
        <ol class="day">
          <li v-for="s in pet.schedule" :key="s.time">
            <time>{{ s.time }}</time>
            <div>
              <span class="day__t">{{ s.title }}</span>
              <span class="day__d">{{ s.desc }}</span>
            </div>
          </li>
        </ol>
      </div>

      <!-- 費用 -->
      <div class="block">
        <div class="block__head">
          <p class="block__en">Price</p>
          <h3 class="block__ttl">費用について</h3>
        </div>
        <div class="price-grid">
          <div>
            <div class="price-scroll">
              <table class="price">
                <caption>{{ pet.price.caption }}</caption>
                <thead>
                  <tr>
                    <th scope="col">{{ pet.price.head[0] }}</th>
                    <th scope="col">{{ pet.price.head[1] }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in pet.price.rows" :key="r.label">
                    <th scope="row">{{ r.label }}</th>
                    <td>{{ r.amount }}<small> {{ r.unit }}</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="note" style="white-space: pre-line">{{ pet.price.note }}</p>
          </div>
          <div>
            <p class="callout__ttl" style="text-align: left; margin-bottom: 12px">オプション</p>
            <ul class="opt">
              <li v-for="o in pet.price.options" :key="o.label">
                <span>{{ o.label }}</span><b>{{ o.amount }}</b>
              </li>
            </ul>
            <p class="note">{{ pet.price.optionNote }}</p>
          </div>
        </div>
      </div>

      <!-- 持ち物 -->
      <div class="block">
        <div class="block__head">
          <p class="block__en">Checklist</p>
          <h3 class="block__ttl">お預かり時の持ち物</h3>
        </div>
        <div class="packs">
          <div v-for="p in pet.packs" :key="p.title" class="pack" :class="{ 'pack--warn': p.warn }">
            <h4 class="pack__ttl"><BaseIcon :name="p.icon" />{{ p.title }}</h4>
            <ul>
              <li v-for="(it, i) in p.items" :key="i">
                <b v-if="it.strong">{{ it.strong }}</b>{{ it.text }}
              </li>
            </ul>
            <p v-if="p.note" class="note">{{ p.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Pet } from '~/data/pets'

defineProps<{ pet: Pet }>()
</script>
