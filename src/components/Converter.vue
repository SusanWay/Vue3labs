/**
Верстка конвертера
*/
<template>
    <div class="container home fs-1">
    <p>
      Конвертер
    </p>
  </div>
    <div class="container d-flex mt-3 converter">
        <div class="mb-3">
            <label class="form-label">Футы</label>
            <input v-model="feet" @input="convertToMeter" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Метры</label>
            <input v-model="meter" @input="convertToFeet" type="text" class="form-control">
        </div>
    </div>
    <div class="container d-flex mt-3 converter">
        <div class="mb-3">
            <label class="form-label">Мили</label>
            <input v-model="mile" @input="convertToKilometer" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Километры</label>
            <input v-model="kilometer" @input="convertToMile" type="text" class="form-control">
        </div>
    </div>
    <div class="container d-flex mt-3 converter">
        <div class="mb-3">
            <label class="form-label">Градусы</label>
            <input v-model="degree" @input="convertToRadian" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Радианы</label>
            <input v-model="radian" @input="convertToDegree" type="text" class="form-control">
        </div>
    </div>
    <div class="container d-flex mt-3 converter">
        <div class="mb-3">
            <label class="form-label">Градусы Цельсия</label>
            <input v-model="celsius" @input="convertToFahrenheit" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Градусы Форингейта</label>
            <input v-model="fahrenheit" @input="convertToCelsius" type="text" class="form-control">
        </div>
    </div>
  </template>
  /**
  переменные и функции для работы конвертера
  */
  <script>
  export default {
  data() {
    return {
      feet: 0,
      meter: 0,
      fToM: 3.28,
      mile: 0,
      kilometer: 0,
      mToK: 1.85,
      degree: 0,
      radian: 0,
      rToD: 57.3,
      celsius: 0,
      fahrenheit: 0,
      fToC: 33.8,
    }
  },
  methods: {
    convertToMeter() {
      this.meter = this.feet / this.fToM;
    },
    convertToFeet() {
      this.feet = this.meter * this.fToM;
    },
    convertToMile() {
      this.mile = this.kilometer / this.mToK;
    },
    convertToKilometer() {
      this.kilometer = this.mile * this.mToK;
    },
    convertToDegree() {
      this.degree = this.radian * this.rToD;
    },
    convertToRadian() {
      this.radian = this.degree / this.rToD;
    },
    convertToCelsius() {
      this.celsius = this.fahrenheit / this.fToC;
    },
    convertToFahrenheit() {
      this.fahrenheit = this.celsius * this.fToC;
    },
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .converter{
    margin-left: 25%;
  }
  .converter div{
    margin-left: 150px;
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
  