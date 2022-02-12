<template>
  <div>
    <h1>Stock list</h1>
    <div class="row">
      <!-- Individual stocks -->
      <div class="col-md-4 mt-4" v-for="stock in stocks" :key="stock.name">
        <StockItem :stock="stock" @buy="buyStonk" />
      </div>
      <!-- End of individual stocks -->
    </div>
  </div>
</template>

<script>
import StockItem from "./StockItem.vue";

export default {
  name: "StockList",
  data() {
    return {
      stocks: [
        { name: "BMW", price: 61.05, previousPrice: 0, currency: "€" },
        { name: "Caterpillar", price: 146.49, previousPrice: 0, currency: "$" },
        { name: "AMD", price: 76.5, previousPrice: 0, currency: "$" },
        { name: "Gazprom", price: 4.583, previousPrice: 0, currency: "$" },
      ],
      portfolio: [],
    };
  },
  components: {
    StockItem,
  },
  methods: {
    updatePrices() {
      this.stocks.forEach((stock) => {
        stock.previousPrice = stock.price;
        stock.price += (Math.random() - 0.5) * 2;
        if (stock.price < 0) {
          stock.price = 0;
        }
      });
    },
    buyStonk(name, amount) {
      alert(`You bought ${name} this amount of times ${amount}`)
    }
  },
  mounted() {
    setInterval(() => {
      this.updatePrices();
    }, 1000);
  },
};
</script>

<style>
.up {
  color: green;
}
.down {
  color: red;
}
</style>