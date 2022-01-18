<template>
<div>
  <section class="home-header">
    <strong>Empresas Juniores Mineiras</strong>
    <small>Busque por empresas Juniores.</small>
    <input type="text" placeholder="Digite o nome da EJ..." />
  </section>
  <section class="home-list">
    <JuniorEnterpriseCard />
    <JuniorEnterpriseCard />
  </section>
</div>
</template>

<script>
import JuniorEnterpriseCard from '@/components/JuniorEnterprises/JuniorEnterpriseCard.vue';

export default {
  name: 'Home',
  components: {
    JuniorEnterpriseCard,
  },
  data() {
    return {
      junior_enterprises: [],
    };
  },
  methods: {

  },
};
</script>

<style scoped src="./style.css" />
