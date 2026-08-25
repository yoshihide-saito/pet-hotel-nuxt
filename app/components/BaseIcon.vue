<template>
  <svg :class="['ico', { 'ico--lg': large }]" viewBox="0 0 24 24" aria-hidden="true" v-html="paths" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string; large?: boolean }>(), { large: false })

const icons: Record<string, string> = {
  stethoscope:
    '<path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M4 3h4"/><path d="M12 3h4"/><path d="M10 12v3a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="11" r="2"/>',
  room:
    '<path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M2 21h20"/><circle cx="13.5" cy="12.5" r="1"/><path d="M17 8h3a1 1 0 0 1 1 1v12"/>',
  clipboard:
    '<path d="M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M8.5 12h7"/><path d="M8.5 16h4.5"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  heart: '<path d="M12 21s-7-4.6-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.4-9 9-9 9z"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  phone:
    '<path d="M5 3h3.5l2 5-2.5 1.5a12 12 0 0 0 6.5 6.5L16 13.5l5 2V19a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3z"/>',
  pin: '<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  dog:
    '<path d="M12 20c-3.5 0-6-2.2-6-5 0-1.7 1-3.2 2.5-4"/><path d="M12 20c3.5 0 6-2.2 6-5 0-1.7-1-3.2-2.5-4"/><circle cx="6.5" cy="7.5" r="2"/><circle cx="17.5" cy="7.5" r="2"/><circle cx="10" cy="4.5" r="1.8"/><circle cx="14" cy="4.5" r="1.8"/>',
  cat:
    '<path d="M5 10.5L4 5l4 2.5A8 8 0 0 1 16 7.5L20 5l-1 5.5"/><path d="M5 10.5C5 15.7 8.1 19 12 19s7-3.3 7-8.5"/><path d="M9.5 12h.01"/><path d="M14.5 12h.01"/><path d="M12 14.5v1"/>',
  arrowUp: '<path d="M12 19V6"/><path d="M5.5 12.5L12 6l6.5 6.5"/>',
  menu: '<path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/>',
  close: '<path d="M5 5l14 14"/><path d="M19 5L5 19"/>'
}

const paths = computed(() => icons[props.name] ?? '')
</script>
