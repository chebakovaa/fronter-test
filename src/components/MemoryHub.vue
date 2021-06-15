<template>
    <div class="memory-hub">
        <MemoryDashboard/>
        <MemoryBoard/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MemoryBoard from "@/components/MemoryBoard.vue"
import MemoryDashboard from "@/components/MemoryDashboard.vue"


@Options({
  components: {
    MemoryDashboard,
    MemoryBoard,
  },
})
export default class MemoryHub extends Vue {}

</script>

<style scoped>

body {margin: 0;}

.memory-hub {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    background-image: url("../assets/grass-surface.jpg");
    background-repeat: repeat;
    background-color: transparent;
    position: absolute;
    bottom: 10px;
    top: 70px;
    right: 10px;
    left: 10px;
}


</style>