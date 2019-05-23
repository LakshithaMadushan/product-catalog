<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <div class="col-md-12">
          <h2 class="h3 mb-3 text-black">Your Order</h2>
          <div class="p-3 p-lg-5 border">
            <table class="table site-block-order-table mb-5">
              <thead>
                <th>Product</th>
                <th>Total</th>
              </thead>
              <tbody>
                <CheckOutItem
                  v-bind:key="index"
                  v-bind:inCartProductItem="inCartProductItem"
                  v-for="(inCartProductItem, index) in getInCartProductItems"
                />

                <CheckOutAmount v-bind:text="'Tax'" v-bind:value="getTax"/>
                <CheckOutAmount v-bind:text="'Discount'" v-bind:value="getDiscount"/>
                <CheckOutAmount v-bind:text="'Total'" v-bind:value="total + getTax - getDiscount"/>
              </tbody>
            </table>

            <div class="form-group">
              <button
                @click="clickPlaceOrder"
                class="btn btn-primary btn-lg py-3 btn-block"
              >Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckOutItem from "../components/CheckOutItem.vue";
import CheckOutAmount from "../components/CheckOutAmount.vue";

export default {
  name: "CheckOut",
  components: { CheckOutItem, CheckOutAmount },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      total: 0
    };
  },
  methods: {
    clickPlaceOrder() {
      localStorage.removeItem("products");
      window.location.href = "/thankyou";
    }
  },
  computed: {
    getInCartProductItems() {
      return this.products.filter(product => {
        return product.inCart == true;
      });
    },
    getTax() {
      this.products
        .filter(product => {
          return product.inCart == true;
        })
        .forEach(inCartItem => {
          this.total = this.total + inCartItem.price * inCartItem.quantity;
        });
      return this.total * (12 / 100);
    },
    getDiscount() {
      return Math.floor(this.total / 500) * (500 * (2 / 100));
    }
  }
};
</script>
