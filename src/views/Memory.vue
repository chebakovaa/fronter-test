<template>
    <div class="task1">
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MemeryHub from "@/components/MemoryHub.vue";

@Options({
  components: {
    MemoryHub,
  },
})
export default class Memory extends Vue {}

</script>
