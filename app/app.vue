<template>
  <div class="site">
    <SiteHeader />

    <main>
      <SiteHero />
      <SectionAbout />
      <PetSection :pet="dog" />
      <PetSection :pet="cat" />
      <SectionFlow />
      <SectionAsk />
    </main>

    <SiteFooter />
    <DemoNotice />
  </div>
</template>

<script setup lang="ts">
import { dog, cat } from '~/data/pets'
</script>
