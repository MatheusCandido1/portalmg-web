<template>
  <div class="card">
    <span class="card-logo">
    </span>
    <span class="card-info">
       <strong>
        InfoAlto Empresa Júnior
      </strong>
      <section class="ej-info">
        <div class="cluster-badge"> Cluster 5</div>
        <div class="core-badge"> Central </div>
      </section>
      <button>Ver resultados <i class="mdi mdi-send"></i></button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JuniorEnterpriseCard',
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

.card-logo {
  background: var(--primary-main);
  height: 50%;
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
