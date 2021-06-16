<template>
    <div class="ads-frame">
      <AdsList/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '@/store';
import AdsList from '@/components/AdsList.vue';

@Options({
  components: {
    AdsList,
  },
})
export default class AdsFrame extends Vue {

  mounted(){
    fetch("entities.json",{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      store.dispatch('offers', { data: (myJson as any).response });
    });
  }

}

</script>

<style scoped>

body {margin: 0;}

.ads-frame {
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