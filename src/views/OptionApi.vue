<template>
  <div class="option">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{ greeting }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 

export default defineComponent({
  name: 'OptionApi',
  data () {
    return {
      greeting: 'This is option api page.' as string,
    }
  },
});
</script>
