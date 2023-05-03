<template>
  <main>
    <h1><span id="notfound">404</span><span id="notfoundtext">Not Found</span></h1>
  </main>
</template>

<style scoped>
main {
  font-family: monospace;
  text-align: center;
  padding: inherit;
  cursor: default;
}

#notfound {
  font-size: xx-large;
}

#notfound:hover {
  font-weight: 600;
  color: #00bd7e;
}

#notfoundtext {
  margin: 10px;
  color: #00bd7e;
}

@media (min-width: 1024px) {
  main {
    padding: 5px;
    padding-left: calc(var(--section-gap) / 2);
    text-align: left;
  }
}
</style>
