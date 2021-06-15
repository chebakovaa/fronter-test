<template>
    <div class="memory-body">
      <MemoryHub/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MemoryHub from "@/components/MemoryHub.vue";

@Options({
  components: {
    MemoryHub,
  },
})
export default class Memory extends Vue {}

</script>
