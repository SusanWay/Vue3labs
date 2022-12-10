/**
Домашняя страницы для удобного перехода по заданиям
*/
<template>
  <div class="container home fs-1">
    <p>
      Заев Владислав ПМ-19-1
    </p>
  </div>
  <div class="container d-flex mt-3 justify-content-around">
    <router-link to="/converter">
      <button type="button" class="btn btn-success">Конвертер</button>
    </router-link>
    <router-link to="/resume">
      <button type="button" class="btn btn-success">Резюме</button>
    </router-link>
    <router-link to="/resumeValid">
      <button type="button" class="btn btn-success">Резюме + Валидация</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn{
  padding: 20px, 10px;
}
.home {
  padding-top: 300px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
