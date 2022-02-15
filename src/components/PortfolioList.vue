<template>
  <div class="row">
    <div class="col-xl-6">
      <h2>Recent Purchases</h2>
      <table class="table">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AMOUNT</th>
          <th>BOUGHT PRICE</th>
          <th>CURRENT PRICE</th>
        </tr>
        <tr v-for="portfolio in portfolio" :key="portfolio.id">
          <td>{{ portfolio.id }}</td>
          <td>{{ portfolio.name }}</td>
          <td>{{ portfolio.amount }}</td>
          <td>{{ portfolio.price }}</td>
          <td
            :class="{
              down:
                stocks[
                  stocks.findIndex((stock) => stock.name === portfolio.name)
                ].price < portfolio.price,
              up:
                stocks[
                  stocks.findIndex((stock) => stock.name === portfolio.name)
                ].price > portfolio.price,
            }"
          >
            {{
              stocks[stocks.findIndex((stock) => stock.name === portfolio.name)]
                .price
            }}
          </td>
        </tr>
      </table>
    </div>
    <div class="col-xl-6">
      <h2>Portfolio</h2>
      <table class="table">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AMOUNT</th>
          <th>SELL</th>
        </tr>
        <tr v-for="portfolio in merged" :key="portfolio.name">
          <td>{{ portfolio.id }}</td>
          <td>{{ portfolio.name }}</td>
          <td>{{ portfolio.amount }}</td>
          <td>
            <input v-model="amount" class="input" type="number"/><button
              @click="Sell(portfolio, amount)" class="btn btn-primary text-dark"
            >
              Sell
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioList",
  props: {
    portfolio: Object,
    stocks: Object,
    merged: Object,
  },
  methods: {
    Sell(merge, amount) {
      this.$emit("sell", merge, amount);
    },
  },
};
</script>

<style></style>
