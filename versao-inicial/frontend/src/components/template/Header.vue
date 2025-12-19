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
  background: linear-gradient(to right, #373b44, #4286f4);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>