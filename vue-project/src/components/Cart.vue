<template>
  <div>
    <h2>🛒 장바구니</h2>
    <ul>
      <li v-if="cart.length === 0">장바구니가 비어 있습니다.</li>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}원
        <button type="button" @click="removeFromCart(productId)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myCart",
  inject: ["cart", "removeFromCart"],
};
</script>
