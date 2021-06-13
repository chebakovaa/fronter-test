import { createRandomDoubleArray, createRandomIntArray, makeIdContentArray, makeContent } from "@/helper/CreateCellContent";
import ICell from "@/model/ICell";
import Cell from "@/model/Cell";
import { createStore } from "vuex";

const cellsContent: Map<number, string> = makeContent();

export default createStore({
  state: {
    columnCount: 4,
    maxColumnCount: 8,
    gameTime: 0,
    activeCellId: -1,
    tryCellId: -1,
    gameContent: makeIdContentArray(4, 8).map((v, index) => new Cell(index, v, cellsContent.get(v))),
    timerId5: -1,
  },
  getters: {
    MAX_CELL_COUNT: state => state.maxColumnCount * state.maxColumnCount,
    GAME_CONTENT: state => state.gameContent,
    GAME_TIME: state => state.gameTime,
    ACTIVE_CELL_ID: state => state.activeCellId,
  },
  mutations: {
    timeStep(state) {
      state.gameTime++;
    },
    timerStop(state) {
      state.gameTime = 0;
    },
    showCell(state, payload) {
      state.gameContent[payload.cellId].show();
    },
    hideCell(state, payload) {
      state.gameContent[payload.cellId].hide();
    },
    deleteCell(state, payload) {
      state.gameContent[payload.cellId].delete();
    },
    activateCell(state, payload) {
      if (state.activeCellId != payload.cellId) {
        if (state.activeCellId >= 0) { state.gameContent[state.activeCellId].hide(); }
        if (payload.cellId >= 0) {
          state.activeCellId = payload.cellId;
          state.gameContent[payload.cellId].show();
        } else {
          state.activeCellId = payload.cellId;
        }
      }
    },
    // tryCell(state, payload) {
    //   state.gameContent[payload.cellid].show();
    // },
  },
  actions: {
    showCell({commit, state}, payload) {
      commit('showCell', { cellId: payload.cellId });
      setTimeout(() => {
        clearTimeout(state.timerId5);
        commit('hideCell', { cellId: payload.cellId });
        commit('hideCell', { cellId: state.activeCellId });
        console.log();
        if (state.gameContent[state.activeCellId].idContent == state.gameContent[payload.cellId].idContent) {
          commit('deleteCell', { cellId: state.activeCellId });
          commit('deleteCell', { cellId: payload.cellId });
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
