<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <CashComponent :cash="cash" />
      </div>
      <h1>Stock list</h1>
      <div class="row">
        <!-- Individual stocks -->
        <div class="col-md-4 mt-4" v-for="stock in stocks" :key="stock.name">
          <StockItem :stock="stock" @buy="buyStonk" />
        </div>
        <!-- End of individual stocks -->
      </div>

      <h1 class="pt-2">Portfolio</h1>
    </div>
    <div class="row">
      <!-- Portfolio -->
      <p v-if="portfolio.length <= 0">Empty poor guy, buy to get rich</p>
      <PortfolioList
        v-else
        :portfolio="portfolio"
        :merged="stacked"
        :stocks="stocks"
        @Sell="sellStonk"
      />
      <!-- End of individual stocks -->
    </div>
  </div>
</template>

<script>
import StockItem from "./StockItem.vue";
import PortfolioList from "./PortfolioList.vue";
import CashComponent from "./CashComponent.vue";

export default {
  name: "StockList",
  data() {
    return {
      stocks: [
        { id: 0, name: "BMW", price: 61.05, previousPrice: 0, currency: "€" },
        {
          id: 1,
          name: "Caterpillar",
          price: 146.49,
          previousPrice: 0,
          currency: "$",
        },
        { id: 2, name: "AMD", price: 76.5, previousPrice: 0, currency: "$" },
        {
          id: 3,
          name: "Gazprom",
          price: 4.583,
          previousPrice: 0,
          currency: "$",
        },
      ],
      portfolio: [],
      cash: 1000,
      counter: 0,
      stacked: [],
    };
  },
  components: {
    StockItem,
    PortfolioList,
    CashComponent,
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
    buyStonk(name, amount, price) {
      if (this.cash >= price * amount) {
        this.counter++;
        this.portfolio.push({
          id: this.counter,
          name: name,
          amount: amount,
          price: price,
        });
        if (this.stacked.some((merge) => merge.name === name)) {
          var index = this.stacked.findIndex((merge) => merge.name === name);
          this.stacked[index].amount += amount;
        } else {
          this.stacked.push({
            id: this.counter,
            name: name,
            amount: amount,
            price: price,
          });
        }
        console.log(this.stacked);
        this.cash -= price * amount;
      } else {
        alert("You are too poor :)");
      }
    },
    sellStonk(merge, amount) {
      if (merge.amount >= amount) {
        if (merge.amount === amount) {
          this.stacked.pop(merge);
          this.cash +=
            this.stocks[
              this.stocks.findIndex((stonk) => stonk.name === merge.name)
            ].price * amount;
        } else {
          this.stacked[
            this.stacked.findIndex((stack) => stack.name === merge.name)
          ].amount -= amount;
          this.cash +=
            this.stocks[
              this.stocks.findIndex((stonk) => stonk.name === merge.name)
            ].price * amount;
        }
        alert("Your New Balance is " + this.cash.toFixed(2));
      } else {
        alert("You selling too much :)");
      }
    },
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
