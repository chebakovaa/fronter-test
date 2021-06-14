<template>
  <div class="task1-hub-cp">
    <button class="task1-hub-cp_start" @click="start">
      Start
    </button>
    <h2 class="task1-hub-cp_time">{{gameTime}}</h2>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import store from "../store";

export default class MemoryDashboard extends Vue {
  
  timerId = 0;

  public get gameTime(): number {
    return store.getters.GAME_TIME;
  }

  start(){
    store.dispatch('startGame');
  }
}
</script>

<style scoped>
.task1-hub-cp {
    order: 1;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
}
.task1-hub-cp_start {
  height: 34px;
  margin: 10px;
}
.task1-hub-cp_time {
  font-size: 4em;
  text-align: center;
  color: white;
}
</style>
