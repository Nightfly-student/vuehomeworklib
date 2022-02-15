<template>
  <div>
    <div class="card">
      <div class="card-body">
        <td>{{ stock.name }}</td>
        <span
          :class="{
            down: stock.price < stock.previousPrice,
            up: stock.price > stock.previousPrice,
          }"
          >{{ stock.currency }} {{ stock.price.toFixed(4) }}</span
        >
        <input v-model="amount" type="number" /><button
          @click="addToCart(stock.name, amount, stock.price)"
        >
          Buy Stonk
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockItem",
  data() {
    return {
      amount: 0,
    };
  },
  props: {
    stock: Object,
  },
  methods: {
    addToCart(name, amount, price) {
      this.$emit("buy", name, amount, price);
    },
  },
};
</script>

<style>
</style>