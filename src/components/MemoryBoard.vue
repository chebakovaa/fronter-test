<template>
   <div>
       <style>
           :root {
               --count-col: {{ countCol }};
               --count-row: {{ countCol }};
           }
       </style>
   </div> 
</template>

<style scoped>
    .task1-panel-board {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(var(--count-col), auto [row-start]);
        grid-template-columns: repeat(var(--count-row), auto [col-start]);
    }
</style>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({
  components: {
  },
})
export default class MemoryBoard extends Vue {
    @Prop({default: 8})
    readonly countCol: number

}
</script>
