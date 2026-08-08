<script setup>
import { person } from '../resources/content';
import { ref, onMounted, onUnmounted } from 'vue';

const words = ['things', 'services', 'products', 'systems'];
const currentIndex = ref(0);

let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length;
  }, 3500);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <section class="flex flex-col justify-start py-4 md:py-6">
    <div class="reveal">
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        {{ person.title }}
      </p>

      <div class="mt-6 h-10 overflow-hidden font-serif text-2xl font-medium text-ink sm:h-12 sm:text-3xl">
        <Transition name="word">
          <span :key="words[currentIndex]">
            I build <span class="font-sans text-accent">{{ words[currentIndex] }}</span>.
          </span>
        </Transition>
      </div>

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#skills"
          class="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper no-underline transition-opacity hover:opacity-90"
        >
          View my skills
        </a>
        <a
          href="#contact"
          class="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink no-underline transition-colors hover:border-ink"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.word-enter-active,
.word-leave-active {
  transition: opacity 0.4s ease;
  position: absolute;
}
.word-enter-from,
.word-leave-to {
  opacity: 0;
}
.word-enter-to,
.word-leave-from {
  opacity: 1;
}
</style>
