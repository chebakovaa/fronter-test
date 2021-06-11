<template>
    <div class="task1-panel">
        <div class="task1-panel-time">
        </div>
        <div class="task1-panel-board">
        </div>
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

.task1-panel {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    height: 500px;
    background-color: aqua;
}

.task1-panel-time {
    order: 1;
}

.task1-panel-board {
    order: 2;
}

</style>