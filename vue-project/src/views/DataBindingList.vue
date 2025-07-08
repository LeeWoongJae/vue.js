<template>
  <h3>List 랜더링</h3>
  <div v-if="productList.length == 0">
    <span>**No Data**</span>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송비</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 15000,
          category: "키보드",
          delivery_price: 3500,
        },
        {
          product_name: "마우스",
          price: 10000,
          category: "마우스",
          delivery_price: 3500,
        },
        {
          product_name: "모니터",
          price: 300000,
          category: "모니터",
          delivery_price: 5000,
        },
      ],
    };
  },
  mounted() {
    this.productList = [];
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
