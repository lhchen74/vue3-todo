<template>
  <div v-if="list.length > 0">
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
        {{ item.title }}
        <button @click="del(item, index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>暂无任务</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let del = (item, index) => {
      ctx.emit("del", index);
      console.log(item, index);
    };
    return {
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
  width: 160px;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background-color: #ddd;
    button {
      display: block;
    }
  }
}
</style>