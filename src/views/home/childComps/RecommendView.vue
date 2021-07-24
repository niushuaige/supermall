<!--  -->
<template>
  <div id="recommends" class="recommends">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommends-item"
    >
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style scoped>
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 70px;
  height: 70px;
}
</style>
