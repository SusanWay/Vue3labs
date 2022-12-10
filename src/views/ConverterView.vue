<template>
    <div class="home">
      <Converter/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Converter from '@/components/Converter.vue'
  
  export default {
    name: 'ConverterView',
    components: {
        Converter
    }
  }
  </script>