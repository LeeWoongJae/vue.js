import axios from "axios";
export default {
  methods: {
    async $api(url, data) {
      //
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      return result.data; // => fetct(uri) --> data.json()과 동일
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader();
        fn.onload = (e) => {
          resolve(e.target.result); // ;base64, ... >> jpg파일을 문자로 변환해서 표기한 값
        };
        fn.readAsDataURL(file);
      });
    },
  },
};
