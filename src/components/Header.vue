<template>
  <header class="site-navbar" role="banner">
    <div class="site-navbar-top">
      <div class="container">
        <div class="row align-items-center">
          <ProductSearch v-bind:class="{isHideSearch}" @searchString="setSearchString"/>

          <CatalogTitle/>

          <MiniCart v-bind:itemCount="inCartItemsCount" v-bind:class="{isHideCart}"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ProductSearch from "./ProductSearch.vue";
import MiniCart from "./MiniCart.vue";
import CatalogTitle from "./CatalogTitle.vue";

export default {
  name: "Header",
  components: { ProductSearch, MiniCart, CatalogTitle },
  data() {
    return {
      itemCount: 0
    };
  },
  props: {
    inCartItemsCount: {
      type: Number
    }
  },
  computed: {
    isHideSearch() {
      return !(this.$route.name == "list");
    },
    isHideCart() {
      return !(
        this.$route.name == "list" ||
        this.$route.name == "item" ||
        this.$route.name == "cart"
      );
    }
  },
  methods: {
    setSearchString(searchString) {
      this.$emit("searchString", searchString);
    }
  }
};
</script>

<style>
.isHideSearch {
  visibility: hidden;
}
.isHideCart {
  visibility: hidden;
}
</style>
