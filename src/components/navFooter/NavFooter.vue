<template>
  <div class="container">
    <div>已完成{{ completed }}/全部{{ list.length }}</div>
    <div v-if="completed > 0">
      <button class="clear-btn" @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let completed = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete;
      });

      return arr.length;
    });

    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false;
      });
      ctx.emit("clear", arr);
    };
    return {
      completed,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  .clear-btn {
    margin-left: 10px;
  }
}
</style>