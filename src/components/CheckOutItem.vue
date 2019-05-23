<template>
  <tr>
    <td>
      {{inCartProductItem.product}}
      <strong class="mx-2">x</strong>
      {{inCartProductItem.quantity}}
    </td>
    <td>{{inCartProductItem.price * inCartProductItem.quantity | toDollor}}</td>
  </tr>
</template>

<script>
export default {
  name: "CheckOutItem",
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
  }
};
</script>
