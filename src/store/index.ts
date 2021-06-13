import { createRandomDoubleArray, createRandomIntArray } from "@/helper/CreateCellContent";
import { createStore } from "vuex";

export default createStore({
  state: {
      columnCount: 6,
      maxColumnCount: 8,
  },
  getters: {
    MAX_CELL_COUNT: state => state.maxColumnCount * state.maxColumnCount,
    ALL_CONTENT: state => new Map<number, string>([...Array(state.maxColumnCount * state.maxColumnCount).keys()].map(v => [v, v.toString()])),
    GAME_CONTENT: state => createRandomDoubleArray(createRandomIntArray(state.columnCount*state.columnCount/2, state.maxColumnCount*state.maxColumnCount)),

  },
  mutations: {},
  actions: {},
  modules: {},
});
