<template>
  <div>
    <section class="home-header">
      <strong>Empresas Juniores Mineiras</strong>
      <small>Busque por empresas Juniores.</small>
      <input type="text" v-model="searchTerm" placeholder="Digite o nome da EJ..." />
    </section>
    <section class="home-filter">
      <button @click="handleSortByNameClick" class="button-filter">
        <span>Nome da EJ</span>
        <svg xmlns="http://www.w3.org/2000/svg" :style="{ 'transform': orderByName === 'desc'?'rotate(-180deg)':'rotate(0deg)'}"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </button>
    </section>
    <section class="home-list">
      <JuniorEnterpriseCard
        v-for="juniorEnterprise in filteredJuniorEnterprises"
        :key="juniorEnterprise.id"
        :juniorEnterprise="juniorEnterprise"
      />
    </section>
    <div v-infinite-scroll="scroll" infinite-scroll-disabled="busy" infinite-scroll-distance="3" />

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
      orderByName: 'asc',
      page: 1,
      busy: false,
    };
  },
  computed: {
    filteredJuniorEnterprises() {
      const filteredData = this.juniorEnterprises;
      return filteredData.filter((je) => (je.name.toLowerCase().includes(this.searchTerm.toLowerCase())));
    },
  },
  watch: {
    orderByName(newOrder) {
      this.getJuniorEnterprises(newOrder);
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    async getJuniorEnterprises(orderBy, page) {
      const loader = this.$loading.show({});
      try {
        this.juniorEnterprises = await JuniorEnterpriseService.getJuniorEnterprises(orderBy, page);
      } catch (error) {
        return error;
      } finally {
        loader.hide();
      }
    },
    handleSortByNameClick() {
      if (this.orderByName === 'asc') {
        this.orderByName = 'desc';
      } else {
        this.orderByName = 'asc';
      }
    },
    async scroll() {
      await JuniorEnterpriseService.getJuniorEnterprises(this.orderByName, this.page).then((data) => {
        if (data.length > 0) {
          this.juniorEnterprises.push(...data);
        }
      });

      this.page += 1;
    },
  },
};
</script>

<style scoped src="./style.css" />
