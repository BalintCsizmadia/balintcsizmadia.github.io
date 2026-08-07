<script setup>
import { stackItems, stackItemsAlt } from '../resources/content';
import { reactive } from 'vue';
import { IconSizes } from '../resources/constants.js';

const loadStackItemMapRandomly = (stackItemMapList) =>
  stackItemMapList[Math.floor(Math.random() * stackItemMapList.length)];

const myStackItems = reactive(loadStackItemMapRandomly([stackItems, stackItemsAlt]));

const displayItem = (item, lastItem) => (item === lastItem ? item.name : `${item.name}, `);
</script>

<template>
  <section id="stack" class="reveal scroll-mt-24 py-16 sm:py-20">
    <div class="mb-12 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent"></div>
    <div class="grid gap-8 sm:grid-cols-[10rem_1fr] sm:gap-12">
      <h2 class="font-serif text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Stack
      </h2>

      <div class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div v-for="stackItem in myStackItems" :key="stackItem.heading">
          <h3 class="flex items-center gap-3 font-serif text-xl font-medium text-ink">
            <span class="flex w-5 justify-center text-muted">
              <font-awesome-icon
                :icon="[stackItem.iconType || 'fa', stackItem.icon]"
                :size="IconSizes.SIMPLEICONS"
                fixed-width
              />
            </span>
            {{ stackItem.heading }}
          </h3>

          <div class="mt-1 pl-[2rem]">
            <p
              v-for="details in stackItem.details"
              :key="details.group || 'items'"
              class="mt-1 text-muted"
            >
              <span v-if="details.group" class="font-medium text-ink"
                >{{ `${details.group}: ` }}</span
              >
              <span
                v-for="item in details.items"
                :key="item.name"
                class="transition-colors hover:text-accent"
                >{{ displayItem(item, details.items[details.items.length - 1]) }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
