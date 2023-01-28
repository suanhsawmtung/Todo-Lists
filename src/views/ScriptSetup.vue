<template>
    <div class="script">
      <img alt="Vue logo" src="../assets/logo.png">
      <h3>{{ greeting }}</h3>
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from "@vue/reactivity";

    const greeting = ref<string>('This is script setup page.');
  
</script>