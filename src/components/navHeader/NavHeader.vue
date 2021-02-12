<template>
  <input
    type="text"
    placeholder="请输入任务名称"
    v-model="value"
    @keydown.enter="enter"
  />
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let value = ref("");
    let enter = () => {
      ctx.emit("add", value.value);
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 10px;
}
</style>