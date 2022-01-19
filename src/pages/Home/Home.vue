<template>
<div>
  <section class="home-header">
    <strong>Empresas Juniores Mineiras</strong>
    <small>Busque por empresas Juniores.</small>
    <input type="text" v-model="searchTerm" placeholder="Digite o nome da EJ..." />
  </section>
  <section class="home-list">
    <JuniorEnterpriseCard
      v-for="juniorEnterprise in filteredJuniorEnterprises"
      :key="juniorEnterprise.id"
      :juniorEnterprise="juniorEnterprise"
    />
  </section>
</div>
</template>

<script>
import JuniorEnterpriseCard from '@/components/JuniorEnterprises/JuniorEnterpriseCard.vue';
import JuniorEnterpriseService from '@/services/JuniorEnterpriseService';

export default {
  name: 'Home',
  components: {
    JuniorEnterpriseCard,
  },
  data() {
    return {
      loading: false,
      searchTerm: '',
      juniorEnterprises: [],
    };
  },
  computed: {
    filteredJuniorEnterprises() {
      const filteredData = this.juniorEnterprises;
      return filteredData.filter((je) => (je.name.toLowerCase().includes(this.searchTerm.toLowerCase())));
    },
  },
  created() {
    this.getJuniorEnterprises();
  },
  methods: {
    async getJuniorEnterprises() {
      this.juniorEnterprises = await JuniorEnterpriseService.getJuniorEnterprises();
    },
  },
};
</script>

<style scoped src="./style.css" />
