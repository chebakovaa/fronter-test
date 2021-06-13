<template>
  <div class="memory-cell"  :class="{'memory-cell_invisible': value.isDeleted}" @click="tryCell">
    <svg viewBox="0 0 40 18" v-if="value.isVisible">
      <text x="0" y="15">{{value.content}}</text>
    </svg>
  </div>
</template>

<script lang="ts">
import ICell from '@/model/ICell';
import store from '@/store';
import { Vue, Prop } from 'vue-property-decorator'

export default class MemoryCell extends Vue {

    @Prop({default: 0})
    readonly value!: ICell;

    tryCell():void {
      if(store.getters.ACTIVE_CELL_ID >= 0){
        store.dispatch('showCell', { cellId: this.value.id });
      } else {
        store.dispatch('activateCell', { cellId: this.value.id });
      }
    }

}

</script>

<style scoped>

.memory-cell {
  background-color:aqua;
}

.memory-cell_invisible {
  background-color:transparent;
}

</style>