<template>
  <div class="about">
    <div id="app"></div>
  </div>
</template>

<script setup>
const main = () => {
  const app = document.getElementById('app');

  const tId = setInterval(() => {
    app.appendChild(createSpanElement('.'));
  }, 1000);

  const inProgressSpanEl = createSpanElement('in progress', 'in-p');
  setTimeout(() => {
    clearInterval(tId);
    app.appendChild(inProgressSpanEl);
  }, 3999)
}

const createSpanElement = (text, id) => {
  const spanEl = document.createElement('span');
  spanEl.textContent = text;
  if (id) {
    spanEl.id = id;
  }
  return spanEl;
}

main();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

/* The animation code */
@keyframes example {
  0% {
    color: black;
    left: 0px;
    top: 0px;
  }

  25% {
    color: rgb(88, 159, 63);
    left: 200px;
    top: 0px;
  }

  50% {
    color: rgb(67, 123, 47);
    left: 200px;
    top: 200px;
  }

  75% {
    color: rgb(47, 85, 33);
    left: 0px;
    top: 200px;
  }

  100% {
    color: rgb(17, 32, 11);
    left: 0px;
    top: 0px;
  }
}

#in-p {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: white;
  animation-name: example;
  animation-duration: 8s;
  animation-delay: 2s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}</style>
