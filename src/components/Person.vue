<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="personal">
    <h1 class="green">{{ name }}</h1>
    <h3>
      {{ title }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

/* small screen
.personal {
  float: right;
  display: contents;
} */

.personal h1,
.personal h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .personal h1,
  .personal h3 {
    text-align: left;
  }
}
</style>
