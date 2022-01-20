<template>
  <div>
    <Header/>
      <main>
        <router-view></router-view>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },

};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css');

main {
  height: 100%;
  margin-top: 2rem;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 1000px;
}
</style>
