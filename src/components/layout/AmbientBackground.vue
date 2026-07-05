<script setup lang="ts">
// Purely decorative atmospheric layer. Fixed, non-interactive, sits behind content.
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- soft accent aurora, top -->
    <div
      class="animate-drift absolute -top-[28vh] left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full opacity-[0.5] blur-[120px]"
      style="
        background: radial-gradient(
          circle at 50% 50%,
          color-mix(in oklab, var(--c-accent) 26%, transparent),
          transparent 62%
        );
      "
    />
    <!-- secondary iris glow, mid-right -->
    <div
      class="animate-float absolute top-[42vh] -right-[18vw] h-[52vh] w-[52vw] rounded-full opacity-[0.35] blur-[130px]"
      style="
        background: radial-gradient(
          circle at 50% 50%,
          color-mix(in oklab, var(--c-iris) 24%, transparent),
          transparent 60%
        );
      "
    />
    <!-- fine grain for texture -->
    <div class="absolute inset-0 opacity-[0.035] mix-blend-soft-light grain" />
    <!-- vignette to seat content -->
    <div
      class="absolute inset-0"
      style="
        background: radial-gradient(120% 80% at 50% -10%, transparent 60%, color-mix(in oklab, var(--c-canvas) 70%, transparent));
      "
    />
  </div>
</template>

<style scoped>
.grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
</style>
