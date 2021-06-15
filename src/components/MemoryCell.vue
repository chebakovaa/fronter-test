<template>
  <div class="memory-cell"  :class="{'memory-cell_invisible': value.isDeleted}" @click="tryCell" >
    <div class="memory-cell__image" v-if="value.isVisible" :style="[ value.content ? {'background': 'url('+getImgUrl(value.content)+') center no-repeat', 'background-color':'white'}:{'background':'#FFF'}]">
    </div>
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

  getImgUrl(svg: string): any {
    var images = require.context('../assets/cells/', false, /\.svg$/)
    return images('./' + svg + ".svg")
  }

}

</script>

<style scoped>

.memory-cell {
  background-color:rgb(95, 117, 218);
}

.memory-cell_invisible {
  background-color:transparent;
}

.memory-cell__image {
  width: 100%;
  height: 100%;
}

</style>