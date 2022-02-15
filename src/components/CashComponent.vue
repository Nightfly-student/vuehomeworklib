<template>
  <div>
    <p>Spare Money: {{ cash.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "CashComponent",
  props: {
    cash: Number,
  },
};
</script>

<style></style>
