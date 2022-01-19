<template>
  <div class="card">
    <div class="card-logo">
      <span class="logo-frame">
        <img :src="juniorEnterprise.logo" />
      </span>
    </div>
    <span class="card-info">
       <strong>
        {{ juniorEnterprise.name }}
      </strong>
      <section class="ej-info">
        <CoreBadge :core="juniorEnterprise.core" />
        <div class="cluster-badge"> Cluster 5</div>
      </section>
      <button>Ver resultados <i class="mdi mdi-send"></i></button>
    </span>
  </div>
</template>

<script>
import CoreBadge from '@/components/Cores/CoreBadge.vue';

export default {
  name: 'JuniorEnterpriseCard',
  components: {
    CoreBadge,
  },
  props: {
    juniorEnterprise: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>

@media (max-width: 576px) {
  .card {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    width: 100%;
    height: 350px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: var(--primary-main);
    overflow: hidden;
  }
}

@media (min-width: 576px) {
  .card {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    width: 300px;
    height: 350px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: var(--primary-main);
    overflow: hidden;
  }
}

img {
  object-fit: contain;
  height: auto;
  max-height: 100%;
}

.card-logo {
  background: var(--primary-main);
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background: #FFF;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}

.card-info {
  height: 50%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  gap: 8px;
}

.ej-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
}

button {
  width: 100%;
  height: 2.25rem;
  border-radius: 5px;
  background: transparent;
  border: 2px solid var(--primary-main);
  font-weight: bold;
  color: var(--primary-main);
}

button:hover {
  background: var(--primary-dark);
  border: 2px solid var(--primary-dark);
  color: #FFF;
  transition: background 0.2s ease-in;
}
</style>
