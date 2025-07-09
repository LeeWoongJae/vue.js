<template>
  <h3>Computed</h3>
  <h3>FirstName : {{ firstname }}</h3>
  <h3>LastName : {{ lastname }}</h3>
  <h3>FullName : {{ fullName }}</h3>

  <h3>장바구니</h3>
  <div v-bind:key="product.id" v-for="product in cart">
    <strong>{{ product.name }}</strong> - 가격 : {{ product.price }} 원 - 수량 :
    <input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총 수량 : </strong>{{ totalQuantity }}</p>
  <p><strong>총 금액 : </strong>{{ totalPrice }}원</p>
</template>

<script>
export default {
  data() {
    return {
      firstname: "길동",
      lastname: "홍",
      cart: [
        { id: 1, name: "apple", price: 2000, quantity: 2 },
        { id: 2, name: "banana", price: 3000, quantity: 4 },
        { id: 3, name: "melon", price: 8000, quantity: 3 },
      ],
    };
  },
  computed: {
    fullName() {
      // 속성이지만 정의를 할때는 handler 처럼
      return this.firstname + ", " + this.lastname;
    },
    totalQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
  },
  mounted() {
    console.log(this);
    this.firstname = "kildong";
  },
};
</script>
<style></style>
