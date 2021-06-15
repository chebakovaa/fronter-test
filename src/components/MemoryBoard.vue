<template>
   <div class="game-board" :style="cssVars" >
     <MemoryCell v-for="cell in items" :key="cell.id" :value="cell"/>
   </div> 
</template>

<style scoped>
    .game-board {
        background-color: transparent;
        width: 100%;
        order: 2;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(var(--count-col), auto [row-start]);
        grid-template-columns: repeat(var(--count-row), auto [col-start]);
        gap: 2px 2px;
    }
</style>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import store from "../store";
import MemoryCell from "@/components/MemoryCell.vue"
import ICell from "@/model/ICell";

@Options({
  components: {
    MemoryCell,
  },
  computed: {
    cssVars() {
      return {
        '--count-col': this.columnCount,
        '--count-row': this.columnCount,
      }
    },
  }
})
export default class MemoryBoard extends Vue {
    
    public get items(): ICell[] {
      return store.getters.GAME_CONTENT;
    }

    public get columnCount(): number {
      return store.getters.COLUMN_COUNT;
    }

}
</script>
