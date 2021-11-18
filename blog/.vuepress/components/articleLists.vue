<template>
  <table align="center">
    <tr v-for="row in Math.ceil(articleData.length / numOfRow)" :key="row" align="center">
      <td v-for="(col,i) in numOfRow" :key="i">
        <articleList :site="articleData[(row - 1) * numOfRow + col - 1]" />
      </td>
    </tr>
  </table>
</template>

<script>
import articleList from "./articleList";
import articleData from "../public/data/articleData";

export default {
  components: {
    articleList,
  },
  data() {
    return {
      articleData,
      numOfRow: 3,
    };
  },
};
</script>
