<template>
   <div :style="cssVars" >
     <MemoryCell v-for="cell in items" :key="cell.id" :value="cell"/>
   </div> 
</template>

<style scoped>
    .task1-panel-board {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(var(--count-col), auto [row-start]);
        grid-template-columns: repeat(var(--count-row), auto [col-start]);
        gap: 2px 2px;
    }
</style>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import store from "../store";
import MemoryCell from "@/components/MemoryCell.vue"

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
    
    public get items(): any {
      const ac = store.getters.ALL_CONTENT;
      return store.getters.GAME_CONTENT.map((v: number, index: number) => ({id: index, key: v, content: ac.get(v)}));
    }

    public get columnCount(): number {
      return store.state.columnCount;
    }

}
</script>
