<template>
  <h1>Hello, {{ msg }}!</h1>
  <h1 v-text="msg" />
  <h2 v-html="str" />

  <p><input type="text" name="" v-model="valueModel" /></p>
  <!-- v-model은 양방향으로 바뀌고 문자타입으로 값을 전달하고 받는다-->
  <p><input type="number" name="" v-model.number="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">SEOUL</option>
      <option value="042">DAEJEON</option>
      <option value="052">BUSAN</option>
    </select>
  </p>
  <p>
    <label for="">{{ chkModel1 }}</label>
    <input type="checkbox" v-model="chkModel1" />CHECKBOX
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="chkModel2"
    />CHECKYESorNOBOX
  </p>
  <p>
    입력:{{ valueModel }} | 숫자:{{ numberModel }} | 도시코드:{{ city }} |
    check-status:{{ chkModel1 }} | check-status(Y/N):{{ chkModel2 }}
  </p>
</template>

<script>
/* data 영역 */
export default {
  data() {
    return {
      msg: "World",
      str: `<span style = "color:red;">Red Text</span>`,
      valueModel: "홍길동",
      numberModel: 10,
      city: "02",
      chkModel1: true,
      chkModel2: "no",
    };
  },
};
</script>

<style scoped>
/* scoped > 현재 페이지에만 적용 */
h1 {
  color: green;
}
</style>
