<template>
  <div class="row">
    <div class="col-md-6">
      <div class="row mb-5">
        <div class="col-md-6">
          <button
            v-if="getTotalValue > 0"
            @click="continueShopping"
            class="btn btn-outline-primary btn-sm btn-block"
          >Continue Shopping</button>
        </div>
      </div>
    </div>
    <div class="col-md-6 pl-5">
      <div class="row justify-content-end">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-12 text-right border-bottom mb-5">
              <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-6">
              <span class="text-black">Total</span>
            </div>
            <div class="col-md-6 text-right">
              <strong class="text-black">{{getTotalValue | toDollor}}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button
                @click="proceedCheckOut"
                class="btn btn-primary btn-lg py-3 btn-block"
              >{{(getTotalValue > 0) ? 'Proceed To Checkout':'Add Items To Cart'}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartTotal",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    proceedCheckOut() {
      if (this.getTotalValue > 0) {
        window.location.href = "/checkout";
      } else {
        window.location.href = "/";
      }
    },

    continueShopping() {
      window.location.href = "/";
    }
  },
  computed: {
    getTotalValue() {
      let tempTotal = 0;
      this.products.forEach(product => {
        if (product.inCart) {
          tempTotal = tempTotal + product.price * product.quantity;
        }
      });
      return tempTotal;
    }
  }
};
</script>
