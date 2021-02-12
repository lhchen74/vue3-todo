<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Start",
  setup() {
    let router = useRouter();
    let name = ref("babb");
    let age = ref(18);
    let obj = ref({ msg: "start" });
    let start = () => {
      router.push({
        path: "/home",
        query: {
          name: name.value,
          age: age.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };

    return {
      start,
    };
  },
});
</script>

<style>
</style>