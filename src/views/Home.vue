<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    let add = (val) => {
      value.value = val;
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已经存在");
        }
      });

      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
      console.log(val);
    };

    let del = (val) => {
      store.commit("delTodo", val);
    };

    let clear = (val) => {
      store.commit("clear", val);
    };

    return {
      add,
      del,
      clear,
      value,
      list,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>>

