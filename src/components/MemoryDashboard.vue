<template>
  <div class="control-panel">
    <button class="control-panel__start" @click="start">
      Start
    </button>
    <h2 class="control-panel__time">{{gameTime}}</h2>
    <MemoryResults/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
import store from "../store"
import MemoryResults from "@/components/MemoryResults.vue"

@Options({
  components: {
    MemoryResults,
  },
})
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
.control-panel {
    order: 1;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
}
.control-panel__start {
  height: 34px;
  margin: 10px;
}
.control-panel__time {
  font-size: 4em;
  text-align: center;
  color: white;
}
</style>
