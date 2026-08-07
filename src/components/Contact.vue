<script setup>
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
  <section id="contact" class="reveal scroll-mt-20 border-t border-line/70 py-20 sm:py-24">
    <div class="grid gap-8 sm:grid-cols-[10rem_1fr] sm:gap-12">
      <h2 class="font-serif text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Contact
      </h2>

      <ul class="flex flex-col divide-y divide-line/70 border-y border-line/70">
        <li v-for="contact in contactMethods" :key="contact.id">
          <a
            :href="setAnchor(contact, AnchorHTMLAttributes.HREF)"
            :target="setAnchor(contact, AnchorHTMLAttributes.TARGET)"
            rel="noopener"
            class="group flex items-center justify-between gap-4 py-5 no-underline"
          >
            <span class="flex items-center gap-4">
              <span
                class="w-6 text-center text-muted transition-colors group-hover:text-accent"
              >
                <font-awesome-icon
                  :icon="[contact.iconType, contact.icon]"
                  :size="IconSizes.SIMPLEICONS"
                />
              </span>
              <span>
                <span class="block font-serif text-xl font-medium text-ink">{{
                  contact.name
                }}</span>
                <span class="block text-sm text-muted">{{ contact.user }}</span>
              </span>
            </span>
            <span
              class="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
              aria-hidden="true"
              >→</span
            >
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
