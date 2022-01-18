<template>
  <header>
    <img src="@/assets/images/logo.svg" />
  </header>
</template>

<script>

export default {
  name: 'Header',

};
</script>

<style>
  header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-main);
    width: 100vw;
  }
</style>
