<!--  -->
<template>
  <!-- 所有的item都展示同一个图片，同一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },

  components: {},

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 3px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
