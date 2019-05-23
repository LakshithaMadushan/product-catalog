<template>
  <div class="col-6 col-md-4 order-3 order-md-3 text-right">
    <div class="site-top-icons">
      <ul>
        <li>
          <a href="/cart" class="site-cart">
            <span class="icon icon-shopping_cart"></span>
            <span class="count">{{itemCount}}</span>
          </a>
        </li>
        <li class="d-inline-block d-md-none ml-md-0">
          <a href="/cart" class="site-menu-toggle js-menu-toggle">
            <span class="icon-menu"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    itemCount: {
      type: Number
    }
  }
};
</script>

<style>
</style>