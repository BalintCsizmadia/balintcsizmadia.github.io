<script setup>
import TechStackItem from './TechStackItem.vue';
import { stackItems } from '../resources/content';

const displayItem = (item, lastItem) => (item === lastItem ? item : `${item}, `);
</script>

<template>
  <TechStackItem v-for="stackItem in stackItems" :id="stackItem.id">
    <template #icon>
      <font-awesome-icon
        class="fai"
        :icon="[stackItem.iconType || 'fa', stackItem.icon]"
        size="2x"
      />
    </template>
    <template #heading>{{ stackItem.heading }}</template>
    <p v-for="details in stackItem.details" :id="details.id">
      <span v-if="details.group" class="group" :aria-label="details.group">{{
        `${details.group}: `
      }}</span>
      <span v-for="item in details.items" :id="item" :aria-label="item">{{
        displayItem(item, details.items[details.items.length - 1])
      }}</span>
    </p>
  </TechStackItem>
</template>

<style scoped>
.group {
  font-weight: 600;
}
</style>
