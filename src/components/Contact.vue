<script setup>
import ContactItem from './ContactItem.vue';
import { contactMethods } from '../resources/content';
import { AnchorHTMLAttributes, IconSizes } from '../resources/constants';

const setAnchor = (contact, property) => {
  switch (property) {
    case AnchorHTMLAttributes.HREF:
      return isEmailType(contact.type) ? `mailto:${contact.contact}` : contact.contact;
    case AnchorHTMLAttributes.TARGET:
      return isEmailType(contact.type) ? null : '_blank';
  }
};

const isEmailType = (type) => type === 'email';
</script>

<template>
  <ContactItem v-for="contact in contactMethods" :id="contact.id">
    <template #icon>
      <font-awesome-icon
        class="fai"
        :icon="[contact.iconType, contact.icon]"
        :size="IconSizes.FONTAWESOME"
      />
    </template>
    <template #contact>
      <a
        :user="contact.user"
        class="hover-underline-animation"
        :href="setAnchor(contact, AnchorHTMLAttributes.HREF)"
        :target="setAnchor(contact, AnchorHTMLAttributes.TARGET)"
        >{{ contact.name }}</a
      >
    </template>
  </ContactItem>
</template>

<style scoped>
a:hover {
  background-color: transparent;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: attr(user);
  color: #34485e;
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  width: max-content;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
