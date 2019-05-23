<template>
  <tr>
    <td class="product-thumbnail">
      <img v-bind:src="getImage" alt="Image" class="img-fluid">
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{inCartProductItem.product}}</h2>
    </td>
    <td>{{inCartProductItem.price | toDollor}}</td>
    <td>
      <Spinner v-bind:initCount="getItemQuantity" @updateSpinnerCount="updateSpinnerCount"/>
    </td>
    <td>{{inCartProductItem.price * getItemQuantity | toDollor}}</td>
    <td>
      <a v-on:click.prevent="removeCartItem" href class="btn btn-primary btn-sm">X</a>
    </td>
  </tr>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  name: "CartItem",
  data() {
    return {
      image: "../assets/logo.png"
    };
  },
  components: { Spinner },
  props: {
    inCartProductItem: {
      type: Object,
      required: true,
      default: {
        id: 0,
        image: "",
        product: "No Name",
        objective: "---",
        price: 0.0,
        description: "",
        inCart: false,
        quantity: 1
      }
    }
  },
  methods: {
    updateSpinnerCount(count) {
      this.inCartProductItem.quantity = count;
    },
    removeCartItem() {
      this.inCartProductItem.inCart = false;
    }
  },
  computed: {
    getImage() {
      return require("../assets/" + this.inCartProductItem.image);
    },
    getItemQuantity() {
      return this.inCartProductItem.quantity;
    }
  }
};
</script>
