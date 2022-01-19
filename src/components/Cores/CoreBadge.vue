<template>
  <div
    class="core-badge"
    :style="{ 'background-color': core.backgroundColor, 'color': core.color }"
    >{{core.name}}</div>
</template>

<script>

export default {
  name: 'CoreBadge',
  props: {
    core: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>

.core-badge {
  padding: 8px;
  border-radius: 6px;
  white-space: nowrap;
  color: #FFF;
  font-weight: 600;
  font-size: 14px;
}
</style>
