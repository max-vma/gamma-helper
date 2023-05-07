<template>
  <div class="gamma-helper-page">
    <neck />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Neck from '../components/neck.vue';

export default defineComponent( {
    name: "GammaHelplerPage",
    components: {
        Neck
    }
})

</script>

<style>

</style>