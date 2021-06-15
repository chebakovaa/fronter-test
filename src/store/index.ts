import { createStore } from "vuex";
import { moduleMemory } from "./moduleMemory";
import { moduleAdvert } from "./moduleAdvert";

export default createStore({
  modules: {
    memory: moduleMemory,
    apart: moduleAdvert
  }
})

/*
export default createStore({
  state: {
    columnCount: 2, // Количество строк и столбцов на поле во время игры (columnCount*columnCount должно быть четным)
    maxColumnCount: 8, // Максимально допустимое количество строк и столбцов на поле во время игры
    gameTime: 0,
    activeCellId: -1, // Id ячейки, к которой подбирается пара
    gameContent: { cells: new Array<ICell>(0), results: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')}, // игровые ячейки
    timerId5: -1,
    timerGameId: -1,
  },
  getters: {
    MAX_CELL_COUNT: state => state.maxColumnCount * state.maxColumnCount,
    GAME_CONTENT: state => state.gameContent.cells,
    GAME_TIME: state => state.gameTime,
    ACTIVE_CELL_ID: state => state.activeCellId,
    RESULTS: state => state.gameContent.results,
  },
  mutations: {
    saveResult(state, time) {
      const best = state.gameContent.results;
      best.push({ result: time, date: new Date() });
      state.gameContent.results = best.sort((a: any, b: any) => a.result - b.result).slice(0, 5);
    },
    gameStart(state) {
      state.gameContent.cells = makeIdContentArray(state.columnCount, state.maxColumnCount).map((v, index) => (new Cell(index, v, cellsContent.get(v))) as ICell);
    },
    gameFinish(state) {
      state.gameContent.cells = new Array<ICell>(0);
    },
    timeStep(state) {
      state.gameTime++;
    },
    timerStop(state) {
      state.gameTime = 0;
    },
    showCell(state, payload) {
      state.gameContent.cells[payload.cellId].show();
    },
    hideCell(state, payload) {
      state.gameContent.cells[payload.cellId].hide();
    },
    deleteCell(state, payload) {
      state.gameContent.cells[payload.cellId].delete();
    },
    activateCell(state, payload) {
      if (state.activeCellId != payload.cellId) {
        if (state.activeCellId >= 0) { state.gameContent.cells[state.activeCellId].hide(); }
        if (payload.cellId >= 0) {
          state.activeCellId = payload.cellId;
          state.gameContent.cells[payload.cellId].show();
        } else {
          state.activeCellId = payload.cellId;
        }
      }
    },
  },
  actions: {
    startGame({commit, state}) {
      if (state.timerGameId > 0){
        clearInterval(state.timerGameId);
        commit("timerStop")
      }
      commit("gameStart");
      state.timerGameId = setInterval(() => commit("timeStep"), 1000);
    },
    showCell({commit, state}, payload) {
      commit('showCell', { cellId: payload.cellId });
      setTimeout(() => {
        clearTimeout(state.timerId5);
        commit('hideCell', { cellId: payload.cellId });
        commit('hideCell', { cellId: state.activeCellId });
        if (state.gameContent.cells[state.activeCellId].idContent == state.gameContent.cells[payload.cellId].idContent) {
          commit('deleteCell', { cellId: state.activeCellId });
          commit('deleteCell', { cellId: payload.cellId });
          if (state.gameContent.cells.every(v => v.isDeleted)) {
            clearInterval(state.timerGameId);
            commit('saveResult', state.gameTime);
            commit('timerStop');
            commit('gameFinish');
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.gameContent.results))
          }
        }
        state.activeCellId = -1;
      }, 500);
    },
    activateCell({commit, state}, payload) {
      clearTimeout(state.timerId5);
      commit('activateCell', { cellId: payload.cellId });
      state.timerId5 = setTimeout(() => {
        commit('activateCell', { cellId: -1 });
      }, 5000);
    }
  },
  modules: {},
});
*/
