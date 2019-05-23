<template>
  <tr>
    <td class="text-black font-weight-bold">
      <strong>{{text}}</strong>
    </td>
    <td class="text-black">{{value | toDollor}}</td>
  </tr>
</template>

<script>
export default {
  name: "CheckOutAmount",
  props: {
    text: {
      type: String,
      default: ""
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>
