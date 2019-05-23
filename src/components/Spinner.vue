<template>
  <div class="mb-6">
    <div class="input-group mb-3" style="max-width: 120px;">
      <div class="input-group-prepend">
        <button
          @click="decreaseCount"
          class="btn btn-outline-primary js-btn-minus"
          type="button"
        >&minus;</button>
      </div>
      <input
        type="text"
        class="form-control text-center"
        v-bind:value="count"
        disabled
        placeholder
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      >
      <div class="input-group-append">
        <button
          @click="increaseCount"
          class="btn btn-outline-primary js-btn-plus"
          type="button"
        >&plus;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    initCount: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data() {
    return {
      count: this.initCount
    };
  },
  methods: {
    increaseCount() {
      this.count++;
      this.$emit("updateSpinnerCount", this.count);
    },
    decreaseCount() {
      this.count == 1 ? this.count : this.count--;
      this.$emit("updateSpinnerCount", this.count);
    }
  }
};
</script>

<style>
</style>
