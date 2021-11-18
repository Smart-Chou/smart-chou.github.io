<template>
  <a :href="site.url">
    <sub>{{ site.name }}</sub>
  </a>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      default() {
        return {
          name: "",
          url: "",
        };
      },
    },
  },
};
</script>
