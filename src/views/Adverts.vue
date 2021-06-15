<template>
    <div class="ads-body">
      <AdsFrame/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AdsFrame from "@/components/AdsFrame.vue";

@Options({
  components: {
    AdsFrame,
  },
})
export default class Adverts extends Vue {}

</script>
