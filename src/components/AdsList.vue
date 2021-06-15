<template>
  <div class="ads">
    <ul>
      <li v-for="ad in rows" :key="ad.id">
        <AdCard/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import {Vue} from 'vue-property-decorator'

export default class AdsList extends Vue {

  public get headers(): string[] {
   return store.getters.OFFERS.length > 0 ? Object.keys(store.getters.OFFERS[0]): ["Result", "Date"];
  } 

  public get rows(): any {
    return store.getters.OFFERS;
  } 
}
</script>

<style scoped>

</style>