<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "24px",
  },
  height: {
    type: String,
    default: "24px",
  },
})
const emit = defineEmits(["click"])

const filename = computed(() => `/src/assets/icons/${props.name}.svg`)
const filesArr = import.meta.glob("@/assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
})
</script>

<template>
  <div class="flex">
    <span
      v-if="filesArr[filename]"
      :style="{ width, height }"
      v-html="filesArr[filename]"
    />
  </div>
</template>
