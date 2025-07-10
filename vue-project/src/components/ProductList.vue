<template>
  <div>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(product, idx) in products" :key="idx">
        {{ product.name }} - {{ product.price }}원
        <button @click="addToCart(product)">장바구니 담기</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  inject: ["addToCart"],
  data() {
    return {
      products: [
        { id: 1, name: "노트북", price: 1200000 },
        { id: 2, name: "스마트폰", price: 800000 },
        { id: 3, name: "헤드셋", price: 150000 },
      ],
    };
  },
};
</script>
