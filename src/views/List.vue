<template>
  <div class="row mb-5">
    <div class="col-md-12 order-2">
      <div class="row mb-5">
        <ProductCard
          v-bind:key="index"
          v-bind:productItem="product"
          v-for="(product, index) in products"
          @addToCartItemId="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

export default {
  name: "List",
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart(id) {
      this.$emit("addToCartItemId", id);
    }
  }
};
</script>

<style>
</style>
