<template>
    <div class="home">
      <Resume/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Resume from '@/components/Resume.vue'
  
  export default {
    name: 'ResumeView',
    components: {
      Resume
    }
  }
  </script>