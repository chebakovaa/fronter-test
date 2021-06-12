<template>
   <div :style="cssVars" >
     <MemoryCell v-for="cell in cells" :key="cell" :title="cell"/>
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
import MemoryCell from "@/components/MemoryCell.vue"

@Options({
  components: {
    MemoryCell,
  },
  computed: {
    cssVars() {
      return {
        '--count-col': this.countCol,
        '--count-row': this.countCol,
      }
    },
    cells() {
      return this.items;
    },
  }
})
export default class MemoryBoard extends Vue {
    
    items: number[] = [...Array(64).keys()];

    @Prop({default: 8})
    readonly countCol!: number

}
</script>
