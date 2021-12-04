<template>
  <a :href="site.url" target="_blank">
    <img width="80px" style="border-radius: 100px;max-width: 80px;" :src="site.avatar" />
    <br />
    <sub :title="site.desc">{{ site.name }}</sub>
  </a>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      default() {
        return {
          name: "补齐空白",
          url: "https://codenoob.top",
          avatar: "https://cdn.jsdelivr.net/gh/Smart-Chou/webphoto@latest/note/xiangmu.png",
          desc: "感兴趣的话，打开看看！",
        };
      },
    },
  },
};
</script>
