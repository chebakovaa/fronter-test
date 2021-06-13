<template>
  <div>
    <button @click="start">
      Start
    </button>
    <h3>{{gameTime}}</h3>
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
    if (this.timerId > 0){
      clearInterval(this.timerId);
      store.commit("timerStop")
    }
    this.timerId = setInterval(() => store.commit("timeStep"), 1000);
  }
}
</script>
