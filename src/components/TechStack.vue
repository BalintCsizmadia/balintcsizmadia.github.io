<script setup>
import TechStackItem from './TechStackItem.vue';
import { stackItems } from '../resources/content';
import { reactive, ref } from 'vue';

let myStackItems = reactive(stackItems);
let alterIcon = ref('');
let alterIconType = ref('');

const IconTypes = {
  FA: 'fa',
  FAB: 'fab'
};

const displayItem = (item, lastItem) => (item === lastItem ? item.name : `${item.name}, `);

const changeIcon = (stackItemObj, item) => {
  stackItemObj.displayAlterIcon = true;
  alterIcon.value = item.icon;
  alterIconType.value = item.iconType || IconTypes.FAB;
};

const changeIconBack = (stackItemObj) => {
  stackItemObj.displayAlterIcon = false;
  alterIcon.value = '';
  alterIconType.value = '';
};
</script>

<template>
  <TechStackItem v-for="stackItem in myStackItems" :id="stackItem.id">
    <template #icon>
      <font-awesome-icon
        class="fai"
        :icon="[
          stackItem.displayAlterIcon ? alterIconType : stackItem.iconType || IconTypes.FA,
          stackItem.displayAlterIcon ? alterIcon : stackItem.icon
        ]"
        size="2x"
      />
    </template>
    <template #heading>{{ stackItem.heading }}</template>
    <p v-for="details in stackItem.details" :id="details.id">
      <span v-if="details.group" class="group" :aria-label="details.group">{{
        `${details.group}: `
      }}</span>
      <span
        v-for="item in details.items"
        :id="item.name"
        :aria-label="item.name"
        @mouseenter="changeIcon(stackItem, item)"
        @mouseleave="changeIconBack(stackItem)"
        >{{ displayItem(item, details.items[details.items.length - 1]) }}</span
      >
    </p>
  </TechStackItem>
</template>

<style scoped>
.group {
  font-weight: 600;
}
</style>
