<script setup>
import TechStackItem from './TechStackItem.vue';
import { stackItems, stackItemsAlt } from '../resources/content';
import { reactive, ref } from 'vue';
import { PostgresqlIcon, MysqlIcon, TypescriptIcon, TerraformIcon } from 'vue3-simple-icons';
import { IconTypes, IconSources, IconSizes } from '../resources/constants.js';

const loadStackItemMapRandomly = (stackItemMapList) =>
  stackItemMapList[Math.floor(Math.random() * stackItemMapList.length)];

let myStackItems = reactive(loadStackItemMapRandomly([stackItems, stackItemsAlt]));
let alterIcon = ref('');
let alterIconType = ref('');
let alterIconSource = ref('');

const dynamicComponent = ref(null);
const dynamicProps = reactive({
  size: IconSizes.SIMPLEICONS,
  class: 'simple-icon'
});

const loadDynamicComponent = (componentName) => {
  const componentMapping = {
    mysql: MysqlIcon,
    postgres: PostgresqlIcon,
    terraform: TerraformIcon,
    typescript: TypescriptIcon
  };
  dynamicComponent.value = componentMapping[componentName];
};

const displayItem = (item, lastItem) => (item === lastItem ? item.name : `${item.name}, `);

const changeIcon = (stackItemObj, item) => {
  stackItemObj.displayAlterIcon = true;
  alterIcon.value = item.icon;
  alterIconType.value = item.iconType || IconTypes.FAB;
  alterIconSource.value = item.iconSource;
  if (item.iconSource === IconSources.SIMPLEICONS) {
    loadDynamicComponent(item.icon);
  }
};

const changeIconBack = (stackItemObj) => {
  stackItemObj.displayAlterIcon = false;
  alterIcon.value = '';
  alterIconType.value = '';
  alterIconSource.value = '';
};
</script>

<template>
  <TechStackItem v-for="stackItem in myStackItems" :id="stackItem.id">
    <template #icon>
      <component
        v-if="alterIconSource === IconSources.SIMPLEICONS && stackItem.displayAlterIcon"
        :is="{ ...dynamicComponent }"
        v-bind="dynamicProps"
      />
      <font-awesome-icon
        v-else
        class="fai"
        :icon="[
          stackItem.displayAlterIcon ? alterIconType : stackItem.iconType || IconTypes.FA,
          stackItem.displayAlterIcon ? alterIcon : stackItem.icon
        ]"
        :size="IconSizes.FONTAWESOME"
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
