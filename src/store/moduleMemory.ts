import ICell from "@/model/ICell";
import Cell from "@/model/Cell";
import { createRandomDoubleArray, createRandomIntArray, makeIdContentArray, makeContent } from "@/helper/CreateCellContent";

const cellsContent: Map<number, string> = makeContent(8);
const STORAGE_KEY = 'memory-game';

type ActionAttribute = {commit: any; state: any};

export const moduleMemory: any = {
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
      COLUMN_COUNT: (state: any) => state.columnCount,
      MAX_CELL_COUNT: (state: any) => state.maxColumnCount * state.maxColumnCount,
      GAME_CONTENT: (state: any) => state.gameContent.cells,
      GAME_TIME: (state: any) => state.gameTime,
      ACTIVE_CELL_ID: (state: any) => state.activeCellId,
      RESULTS: (state: any) => state.gameContent.results,
    },
    mutations: {
      saveResult(state: any, time: any) {
        const best = state.gameContent.results;
        best.push({ result: time, date: new Date() });
        state.gameContent.results = best.sort((a: any, b: any) => a.result - b.result).slice(0, 5);
      },
      gameStart(state: any) {
        state.gameContent.cells = makeIdContentArray(state.columnCount, state.maxColumnCount).map((v, index) => (new Cell(index, v, cellsContent.get(v))) as ICell);
      },
      gameFinish(state: any) {
        state.gameContent.cells = new Array<ICell>(0);
      },
      timeStep(state: any) {
        state.gameTime++;
      },
      timerStop(state: any) {
        state.gameTime = 0;
      },
      showCell(state: any, payload: any) {
        state.gameContent.cells[payload.cellId].show();
      },
      hideCell(state: any, payload: any) {
        state.gameContent.cells[payload.cellId].hide();
      },
      deleteCell(state: any, payload: any) {
        state.gameContent.cells[payload.cellId].delete();
      },
      activateCell(state: any, payload: any) {
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
      startGame({commit, state}: ActionAttribute) {
        if (state.timerGameId > 0){
          clearInterval(state.timerGameId);
          commit("timerStop")
        }
        commit("gameStart");
        state.timerGameId = setInterval(() => commit("timeStep"), 1000);
      },
      showCell({commit, state}: ActionAttribute, payload: any) {
        commit('showCell', { cellId: payload.cellId });
        setTimeout(() => {
          clearTimeout(state.timerId5);
          commit('hideCell', { cellId: payload.cellId });
          commit('hideCell', { cellId: state.activeCellId });
          if (state.gameContent.cells[state.activeCellId].idContent == state.gameContent.cells[payload.cellId].idContent) {
            commit('deleteCell', { cellId: state.activeCellId });
            commit('deleteCell', { cellId: payload.cellId });
            if (state.gameContent.cells.every((v: ICell) => v.isDeleted)) {
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
      activateCell({commit, state}: ActionAttribute, payload: any) {
        clearTimeout(state.timerId5);
        commit('activateCell', { cellId: payload.cellId });
        state.timerId5 = setTimeout(() => {
          commit('activateCell', { cellId: -1 });
        }, 5000);
      }
    },
  };