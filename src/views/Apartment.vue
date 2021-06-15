<template>
    <div class="apart-body">
      <ApartHub/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ApartHub from "@/components/ApartHub.vue";

@Options({
  components: {
    ApartHub,
  },
})
export default class Memory extends Vue {}

</script>
