import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      { title: "eating", complete: false },
      { title: "sleeping", complete: false },
      { title: "coding", complete: false },
    ],
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload);
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1);
    },
    clear(state, payload) {
      state.list = payload;
    },
  },
  actions: {},
  modules: {},
});
