<template>
  <table align="center">
    <tr v-for="row in Math.ceil(listsData.length / numOfRow)" :key="row" align="center">
      <td v-for="(col,i) in numOfRow" :key="i">
        <project :site="listsData[(row - 1) * numOfRow + col - 1]" />
      </td>
    </tr>
  </table>
</template>

<script>
import project from "./project";
import listsData from "../public/data/listsData";

export default {
  components: {
    project,
  },
  data() {
    return {
      listsData,
      numOfRow: 7,
    };
  },
};
</script>
