<template>
  <div id="app">
    <Header v-bind:inCartItemsCount="getInCartItems" @searchString="searchItems"/>
    <div class="site-section">
      <div class="container">
        <router-view v-bind:products="products" @addToCartItemId="addToCart"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Products from "./assets/data/data.json";

export default {
  name: "app",
  data() {
    return {
      products: []
    };
  },
  components: { Header, Footer },
  methods: {
    addToCart(id) {
      this.products.forEach(product => {
        if (product.id == id) {
          product.inCart = true;
          product.quantity = 1;
        }
      });
    },
    setDataToClientStorage(products) {
      localStorage.setItem("products", JSON.stringify(products));
    },
    getProducts() {
      return localStorage.getItem("products") != undefined
        ? JSON.parse(localStorage.getItem("products"))
        : Products;
    },
    searchItems(searchString) {
      console.log(searchString);
    }
  },
  computed: {
    getInCartItems() {
      this.setDataToClientStorage(this.products);
      return this.products.filter(product => {
        return product.inCart == true;
      }).length;
    }
  },
  created() {
    if (localStorage.getItem("products") == undefined) {
      this.setDataToClientStorage(Products);
    }
    this.products = this.getProducts();
  }
};
</script>


<style>
@import "https://fonts.googleapis.com/css?family=Mukta:300,400,700";
@import "./assets/fonts/icomoon/style.css";
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/style.css";
</style>