<script setup>
import { person } from '../resources/content';
</script>

<template>
  <section class="flex min-h-[52vh] flex-col justify-start py-4 sm:py-6">
    <div class="reveal">
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        {{ person.title }}
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#stack"
          class="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper no-underline transition-opacity hover:opacity-90"
        >
          View my stack
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
