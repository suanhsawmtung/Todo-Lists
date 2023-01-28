<template>
  <div class="composition">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{ greeting }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; 

export default defineComponent({
  name: 'compositionApi',
  setup() {
    const greeting = ref<string>('This is composition api page.');

    return {
      greeting
    }
  }
});
</script>