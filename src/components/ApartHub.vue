<template>
    <div class="apart-hub">
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class ApartHub extends Vue {}

</script>

<style scoped>

body {margin: 0;}

.apart-hub {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    background-color: gainsboro;
    position: absolute;
    bottom: 10px;
    top: 70px;
    right: 10px;
    left: 10px;
}


</style>