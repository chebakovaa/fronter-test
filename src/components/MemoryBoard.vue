<template>
   <div>
   </div> 
</template>

<style scoped>
    .task1-panel-board {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(3, auto [row-start]);
        grid-template-columns: repeat(3, auto [col-start]);
    }
</style>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  components: {
  },
})
export default class MemoryBoard extends Vue {}
</script>
