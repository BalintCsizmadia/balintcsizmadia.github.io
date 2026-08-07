<script setup>
import Hero from './components/Hero.vue';
import TechStack from './components/TechStack.vue';
import Contact from './components/Contact.vue';
import { person } from './resources/content';
import { useReveal } from './composables/useReveal';
import { useScrollScene } from './composables/useScrollScene';
import { computed } from 'vue';
import logo from './assets/logo.png';

useReveal();
const scene = useScrollScene(320);

const nav = [
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

// The name is a sticky element spanning the whole page, so once it reaches the
// header line it STAYS pinned there for the rest of the scroll. While at the top
// it's scaled up (into the hero); as you scroll it shrinks to its docked size and
// slides right to sit beside the logo. Transform-only = compositor-smooth.
// Scale is smaller on mobile so the big name never overflows the viewport.
const nameStyle = computed(() => {
  const t = scene.reduced ? 1 : scene.t;
  const heroScale = scene.isMobile ? 1.9 : 3.1;
  const scale = heroScale - (heroScale - 1) * t;
  // Slide right into place beside the logo as it docks (0 → logo width + gap).
  const dockX = (scene.isMobile ? 2.5 : 2.75) * t;
  return {
    transform: `translateX(${dockX}rem) scale(${scale})`,
    transformOrigin: 'left center'
  };
});

// Scroll to the true page top. Using window.scrollTo (not an #anchor) avoids
// scroll-padding-top offsetting the landing point 5rem below the top.
const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: scene.reduced ? 'auto' : 'smooth' });
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Header: logo left + nav right. The name docks onto this line, beside the logo,
         via the sticky element below. -->
    <header class="sticky top-0 z-20 border-b border-line/70 bg-paper/70 backdrop-blur-md">
      <div class="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#top" class="flex items-center no-underline" @click="scrollToTop">
          <img :src="logo" alt="Logo" class="h-7 w-7 sm:h-8 sm:w-8" />
        </a>
        <nav class="flex items-center gap-5 text-sm sm:gap-6">
          <a
            v-for="link in nav"
            :key="link.href"
            :href="link.href"
            class="text-muted no-underline transition-colors hover:text-ink"
            >{{ link.label }}</a
          >
        </nav>
      </div>
    </header>

    <main id="top" class="mx-auto max-w-content px-6 sm:px-8">
      <!-- Sticky, page-spanning name. Direct child of <main> so its containing block
           is the whole page: it starts large in the hero (pushed down by margin-top),
           then pins at the header line and STAYS docked for the rest of the scroll. -->
      <a
        href="#top"
        class="dock-name pointer-events-none sticky z-30 block w-max font-serif font-medium leading-none tracking-tightest text-ink no-underline"
        :style="nameStyle"
        >{{ person.name }}</a
      >

      <Hero />
      <TechStack />
      <Contact />
    </main>

    <footer class="border-t border-line/70">
      <div class="mx-auto max-w-content px-6 py-8 text-sm text-muted sm:px-8">
        © {{ new Date().getFullYear() }} {{ person.name }}
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* The name's layout box is its docked (1x) size; the hero size comes from the
   scale transform (origin left center). As a direct child of <main>, its sticky
   containing block is the whole page, so it pins at `top` and stays docked.
   margin-top pushes its resting (scroll=0) position down into the hero. */
.dock-name {
  top: 1.15rem;
  margin-top: 5.5rem;
  font-size: 1.125rem; /* text-lg docked size */
}
@media (min-width: 640px) {
  .dock-name {
    top: 1.35rem;
    margin-top: 7rem;
  }
}
</style>
