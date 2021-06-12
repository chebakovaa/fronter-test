<template>
  <div class="memory-cell">
    <svg viewBox="0 0 40 18">
      <text x="0" y="15">{{title}}</text>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'

export default class MemoryCell extends Vue {

    @Prop({default: 0})
    readonly title!: number

}

</script>

<style scoped>

.memory-cell {
  background-color:aqua;
}

</style>