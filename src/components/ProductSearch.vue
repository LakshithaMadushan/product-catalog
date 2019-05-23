<template>
  <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
    <form action class="site-block-top-search">
      <span class="icon icon-search2"></span>
      <input
        type="text"
        class="form-control border-0"
        v-model="searchString"
        @input="setSearchString()"
        placeholder="Search"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    setSearchString() {
      this.$emit("searchString", this.searchString);
    }
  }
};
</script>

<style>
</style>
