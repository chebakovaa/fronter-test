<template>
  <div class="ads">
    <ul class="ads__list">
      <li class="ads__list-item" v-for="ad in rows" :key="ad.id">
        <AdCard :offer="ad" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import {Vue, Options} from 'vue-property-decorator'
import AdCard from '@/components/AdCard.vue'

@Options({
  components: {
    AdCard,
  },
})
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
  .ads {
    width: 100%;
    padding: 2vw;
  }
  .ads__list {
    list-style-type: none;
    list-style-position: outside;
    text-indent: 0px;
    padding-inline-start: 0px;
  }

  .ads__list-item {
    padding-bottom: 1vw;
  }

</style>