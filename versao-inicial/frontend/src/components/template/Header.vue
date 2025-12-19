<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #9cecfb, #65c7f7, #0052d4);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>