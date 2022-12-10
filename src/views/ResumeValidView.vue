<template>
    <div class="home">
      <ResumeValid/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ResumeValid from '@/components/ResumeValid.vue'
  
  export default {
    name: 'ResumeValidView',
    components: {
      ResumeValid
    }
  }
  </script>