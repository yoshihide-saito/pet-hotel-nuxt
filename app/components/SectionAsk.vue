<template>
  <section id="ask" class="sec sec--tint">
    <div class="wrap">
      <div class="sec__head">
        <p class="sec__no">05</p>
        <p class="sec__en">Ask</p>
        <p class="sec__ttl">よくあるご質問</p>
        <hr class="rule">
      </div>

      <div class="faq-cols">
        <div v-for="g in faqGroups" :key="g.label">
          <p class="faq__cap"><BaseIcon :name="g.icon" />{{ g.label }}</p>
          <div class="qa">
            <details v-for="(f, i) in g.items" :key="i">
              <summary>{{ f.q }}</summary>
              <p class="qa__a">{{ f.a }}</p>
            </details>
          </div>
        </div>
      </div>

      <div class="contact">
        <p class="eyebrow">Contact</p>
        <h3 class="contact__ttl">まずは空室のご確認から</h3>
        <p class="contact__sub">日程が決まっていなくても、ご相談だけで構いません。</p>

        <a class="contact__tel" :href="site.telHref">
          <BaseIcon name="phone" />{{ site.tel }}
        </a>
        <p class="contact__hours">{{ site.telHours }}</p>

        <dl class="contact__grid">
          <div class="contact__cell">
            <BaseIcon name="pin" />
            <div>
              <dt>Address</dt>
              <dd>{{ site.zip }}<br>{{ site.address }}<br>{{ site.building }}</dd>
            </div>
          </div>
          <div class="contact__cell">
            <BaseIcon name="mail" />
            <div>
              <dt>Mail</dt>
              <dd>{{ site.mail }}<br>{{ site.mailNote }}</dd>
            </div>
          </div>
          <div class="contact__cell">
            <BaseIcon name="clock" />
            <div>
              <dt>Hours</dt>
              <dd>{{ site.handover }}<br>{{ site.closed }}</dd>
            </div>
          </div>
        </dl>

        <div class="contact__acts">
          <a class="btn btn--light" href="#flow">Webフォームで予約する</a>
          <a class="btn btn--outline-light" :href="site.telHref">電話で問い合わせる</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqGroups } from '~/data/faq'
import { site } from '~/data/site'
</script>
