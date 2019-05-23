<template>
  <div>
    <div class="row mb-5">
      <form class="col-md-12" method="post">
        <div class="site-blocks-table">
          <table class="table table-bordered">
            <thead v-if="getInCartProductItems.length > 0">
              <tr>
                <th class="product-thumbnail">Image</th>
                <th class="product-name">Product</th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-total">SubTotal</th>
                <th class="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <CartItem
                v-bind:key="index"
                v-bind:inCartProductItem="inCartProductItem"
                v-for="(inCartProductItem, index) in getInCartProductItems"
              />
            </tbody>
          </table>
        </div>
      </form>
    </div>

    <CartTotal v-bind:products="getInCartProductItems"/>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import CartTotal from "../components/CartTotal.vue";

export default {
  name: "Cart",
  components: { CartItem, CartTotal },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    getInCartProductItems() {
      return this.products.filter(product => {
        return product.inCart == true;
      });
    }
  }
};
</script>

<style>
</style>
