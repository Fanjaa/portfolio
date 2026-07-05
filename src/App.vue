<script setup lang="ts">
import AmbientBackground from '@/components/layout/AmbientBackground.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExpertiseSection from '@/components/sections/ExpertiseSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import StackSection from '@/components/sections/StackSection.vue'
import PhilosophySection from '@/components/sections/PhilosophySection.vue'
import AchievementsSection from '@/components/sections/AchievementsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <a
    href="#work"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
  >
    Skip to content
  </a>

  <AmbientBackground />
  <SiteHeader />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <ExpertiseSection />
    <ProjectsSection />
    <ExperienceSection />
    <StackSection />
    <PhilosophySection />
    <AchievementsSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
