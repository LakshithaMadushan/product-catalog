<template>
  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
    <div class="block-4 text-center border">
      <figure class="block-4-image">
        <a class="image-field" v-bind:href="'/item/' + productItem.id">
          <img v-bind:src="getImage" alt="Image placeholder" class="img-fluid">
        </a>
      </figure>
      <div class="block-4-text p-4">
        <h3>
          <a v-bind:href="'/item/' + productItem.id">{{productItem.product}}</a>
        </h3>
        <p class="mb-0">{{productItem.objective}}</p>
        <p class="text-primary font-weight-bold">{{productItem.price | toDollor}}</p>
        <a
          v-on:click.prevent="addToCart"
          href
          v-bind:class="{'buy-now btn btn-sm btn-primary dissabled':productItem.inCart, 'buy-now btn btn-sm btn-primary':!productItem.inCart}"
        >{{productItem.inCart?'Added':'Add To Cart'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      image: "../assets/logo.png"
    };
  },
  props: {
    productItem: {
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
    addToCart() {
      this.$emit("addToCartItemId", this.productItem.id);
    }
  },
  computed: {
    getImage() {
      return require("../assets/" + this.productItem.image);
    }
  }
};
</script>

<style>
.item-name {
  color: #7971ea;
}
.image-field {
  cursor: pointer;
}
</style>

<style scoped>
.dissabled {
  background-color: #343a4080;
  border-color: #343a4080;
}
</style>