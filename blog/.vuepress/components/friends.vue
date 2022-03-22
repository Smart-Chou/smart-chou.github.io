<template>
    <div class="friends">
        <div class="blog-list-wrapper">
            <Card class="blog-item" v-for="blog in currentPageData" :key="blog.name">
                <template slot="front">
                    <img class="avatar" :src="blog.avatar" alt="首页缩略图" />
                </template>
                <template slot="back">
                    <div class="info">
                        <h4 class="title">{{ blog.name }}</h4>
                        <p class="desc">{{ blog.desc }}</p>
                        <a class="btn" target="_blank" :href="blog.link">开往</a>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import friendsData from '../public/data/friendsData';

export default {
    data() {
        return {
            friendsData,
            currentPage: 1,
        };
    },
    computed: {
        currentPageData() {
            const start = (this.currentPage - 1) * 88;
            const end = this.currentPage * 88;
            return this.friendsData.slice(start, end);
        },
    },
    methods: {
        getCurrentPage(currentPage) {
            this.currentPage = currentPage;
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 165);
        },
    },
};
</script>

<style lang="stylus" scoped>
.friends
  .blog-list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item
      margin-bottom 0.2rem
      width 192px
      height 192px
      transition: all .5s;
      .info
        box-sizing border-box
        padding 1.5rem 1rem
        .title
          text-align center
          font-size 18px
        .desc
          text-align center
          font-size 14px
        .btn
          position absolute
          left 78.5px
          display inline-block
          background-color $accentColor
          color #ffffff
          border-radius 12px
          padding 2px 5px
          font-size 12px
          text-decoration none
          cursor pointer

@media (max-width: $MQMobile)
  .friends
    .blog-list-wrapper
      .blog-item
        max-width 144px
        max-height 144px
        .info
          .title
            font-size 16px
          .desc
            font-size 12px
          .btn
            left 66px
            border-radius 10px
            font-size 10px
</style>
