<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :message="message" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMultidata, getHomeCatitems } from "network/home";

export default {
  data() {
    return {
      message: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(
      res => {
        this.message = res.message;
      },
      err => {
        console.log(err);
      }
    );
    getHomeCatitems().then(
      res => {
        this.recommends = res.message;
      },
      err => {
        console.log(err);
      }
    );
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },

  computed: {},

  methods: {}
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
