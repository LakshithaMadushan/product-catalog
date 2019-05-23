<template>
  <div class="row">
    <div class="col-md-6">
      <img v-bind:src="getImage" alt="Image" class="img-fluid">
    </div>
    <div class="col-md-6">
      <h2 class="text-black">{{selectedProduct.product}}</h2>
      <p>{{selectedProduct.description}}</p>

      <p>
        <strong class="text-primary h4">{{selectedProduct.price | toDollor}}</strong>
      </p>

      <p>
        <a
          v-on:click.prevent="addToCart"
          href
          v-bind:class="{'buy-now btn btn-sm btn-primary dissabled':selectedProduct.inCart, 'buy-now btn btn-sm btn-primary':!selectedProduct.inCart}"
        >{{selectedProduct.inCart?'Added':'Add To Cart'}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";

export default {
  name: "Item",
  components: { Spinner },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedProduct: {}
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCartItemId", this.selectedProduct.id);
    },
    updateSpinnerCount(count) {
      this.selectedProduct.quantity = count;
    }
  },
  computed: {
    getImage() {
      return require("../assets/" + this.selectedProduct.image);
    },
    getItemQuantity() {
      return this.selectedProduct.quantity;
    }
  },
  created() {
    this.selectedProduct = this.products[this.$route.params.id - 1];
  }
};
</script>

<style scoped>
.dissabled {
  background-color: #343a4080;
  border-color: #343a4080;
}
</style>

