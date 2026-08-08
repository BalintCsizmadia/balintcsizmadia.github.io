<script setup>
import { skillItems } from '../resources/content';
import { IconSizes } from '../resources/constants.js';
</script>

<template>
  <section id="skills" class="reveal scroll-mt-20 pb-8 pt-4 sm:pb-12 sm:pt-6">
    <div class="mb-12 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent"></div>
    <div class="grid gap-8 sm:grid-cols-[10rem_1fr] sm:gap-12">
      <h2 class="font-serif text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Skills
      </h2>

      <div class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div v-for="skillItem in skillItems" :key="skillItem.heading">
          <h3 class="flex items-center gap-3 font-serif text-xl font-medium text-ink">
            <span class="flex w-5 justify-center text-muted">
              <font-awesome-icon
                :icon="[skillItem.iconType || 'fa', skillItem.icon]"
                :size="IconSizes.SIMPLEICONS"
                fixed-width
              />
            </span>
            {{ skillItem.heading }}
          </h3>

          <p class="mt-1 pl-[2rem] text-muted">
            <span
              v-for="(item, index) in skillItem.details[0].items"
              :key="item.name"
              class="transition-colors hover:text-accent"
              >{{ index < skillItem.details[0].items.length - 1 ? `${item.name}, ` : item.name }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
