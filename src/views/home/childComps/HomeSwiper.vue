<!--  -->
<template>
  <swiper>
    <swiper-item v-for="item in message" :key="item.goods_id">
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {};
  },
  props: {
    message: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },

  computed: {},

  methods: {}
};
</script>
<style scoped></style>
