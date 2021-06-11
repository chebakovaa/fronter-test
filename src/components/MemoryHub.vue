<template>
    <div class="task1-panel">
        <div class="task1-panel-time">
        </div>
        <div class="task1-panel-board">
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class MemoryHub extends Vue {}

</script>

<style scoped>

body {margin: 0;}

.task1-panel {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    background-color: blanchedalmond;
    position: absolute;
    bottom: 10px;
    top: 70px;
    right: 10px;
    left: 10px;
}

.task1-panel-time {
    order: 1;
    width: 300px;
}

.task1-panel-board {
    order: 2;
    background-color: cadetblue;
    width: 100%;
}

</style>