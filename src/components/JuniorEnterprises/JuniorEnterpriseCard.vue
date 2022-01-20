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
      <button class="card-button">Ver resultados <i class="mdi mdi-send"></i></button>
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
.card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: var(--primary-main);
  overflow: hidden;
  height: 350px;
}

@media (max-width: 576px) {
  .card {
    width: 100%;
  }
}

@media (min-width: 576px) {
  .card {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .card {
    width: 353px;
  }
}

@media (min-width: 992px) {
  .card {
    width: 465px;
  }
}

@media (min-width: 1200px) {
  .card {
    width: 300px
  }
 }

.logo-frame > img {
  object-fit: contain;
  height: 100%;
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

.logo-frame > img {
  object-fit: contain;
  height: 100%;
  width: 100%;
  padding: 10px;
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

.card-button {
  background: transparent;
  border: 2px solid var(--primary-main);
  color: var(--primary-main);
}

.card-button:hover {
  background: var(--primary-dark);
  border: 2px solid var(--primary-dark);
  color: #FFF;
  transition: background 0.2s ease-in;
}
</style>
