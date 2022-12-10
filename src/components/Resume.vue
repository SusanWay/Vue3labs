/**
Верстка формы и резюме
*/
<template>
  <div class="m-5">

    <div class="container">
      <div class="col">
        <h1 class="fs-3 m-3">Заполните форму:</h1>
        <form>
        <div class="container d-flex mt-3 justify-content-around">
            <div class="mb-3">
            <p class="text-start fs-5">Профессия</p>
            <input v-model="profession" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Город</p>
            <input v-model="city" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Телефон</p>
            <input v-model="phone" type="text" class="form-control">
        </div>
        </div>
        <div class="container d-flex mt-3 justify-content-around">
            <div class="mb-3">
            <p class="text-start fs-5">Фамиля</p>
            <input v-model="surname" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Имя</p>
            <input v-model="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Отчесво</p>
            <input v-model="patronymic" type="text" class="form-control">
        </div>
        </div>
        <div class="container d-flex mt-3 justify-content-around">
            <div class="mb-3">
            <p class="text-start fs-5">Фото</p>
            <input v-model="photo" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Почта</p>
            <input v-model="mail" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Дата рождения</p>
            <input v-model="bDate" type="date" class="form-control">
        </div>
        </div>
        <div class="container d-flex mt-3 justify-content-around">
            <div class="mb-3">
            <p class="text-start fs-5">О себе</p>
            <textarea  v-model="about" class="input-site border fs-5 p-2" style="height: 200px; width: 400px;" maxlength="350" rows="7"></textarea>
            </div>
            <div class="mb-3">
            <p class="text-start fs-5">О себе</p>
            <textarea  v-model="skills" class="input-site border fs-5 p-2" style="height: 200px; width: 400px;" maxlength="350" rows="7"></textarea>
            </div>
        </div>
        <div class="container d-flex mt-3 justify-content-around">
            <div class="mb-3">
            <p class="text-start fs-5">Образование</p>
            <input v-model="education" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <p class="text-start fs-5">Желаемая ЗП, руб</p>
            <input v-model="money" type="text" class="form-control">
        </div>
        </div>
        </form>
      </div>

      <div class="col">
        <h1>Ваше резюме</h1>
        <div class="row">
          <div class="col-6">
            <p class="fs-5 text-start">ФИО: {{ surname }} {{name}} {{patronymic}}</p>
            <p class="fs-5 text-start">Основной вид деятельности: {{ profession }}</p>
            <p class="fs-5 text-start">Почта: {{ mail }} </p>
            <p class="fs-5 text-start">Телефон: {{ phone }}</p>
            <p class="fs-5 text-start">Дата рождения: {{ bDate }}</p>
            <p class="fs-5 text-start">Город проживания: {{ city }}</p>
            <p class="fs-5 text-start">Образование: {{ education }}</p>
          </div>
          <div class="col-6">
            <img :src="photo" class="img-fluid">
          </div>
          <div class="col-6">
            <p class="fs-5">О себе:</p>
            <p class="fs-5 text-start">{{ about }}</p>
          </div>
          <div class="col-6">
            <p class="fs-5">Навыки:</p>
          <p class="fs-5 text-start">{{skills}}</p>
          </div>
        </div>
        <div class="row">
        </div>
        <p class="fs-5 text-center">Ожидаемая ЗП: {{ money }}, руб</p>

      </div>
    </div>
  </div>
</template>


/**
Создание переменных для хранения данных
*/
<script>
export default {
  data() {
    return {
      profession: 'Шеф повар',
      city: 'Чайхона',
      photo: 'https://oxvo.ru/wp-content/uploads/2020/11/imagetools2-25.jpg',
      surname: 'Зайцев',
      name: 'Владислав',
      patronymic: 'Вадимович',
      phone: '8-960-157-(8961)',
      mail: 'Admin@mail.ru',
      bDate: '2001-04-11',
      education: 'Московский государственный университет пищевых производств',
      money: '13260',
      skills: 'знание вкусовых качеств блюд;знание кухонь мира;знание правил ценообразования и калькуляции блюд;знание правил хранения продуктов;знание технологического оборудования;навыки управления коллективом;',
      about: 'В 1997 году стал шеф-поваром. Работает шефом в ресторанах «Репортёр», «Ностальжи», VIP-21, «Бульваръ». Является бренд-шефом проекта «Ginza Project» (до 2003 г.)С 2000 года участвует в профессиональных конкурсах, получает заслуженные награды как «Шеф Года». Тогда же Ивлев стал разрабатывать собственную авторскую кухню. В 2002—2005 работает шеф-поваром в следующих ресторанах: «In Vino», «L`Etranger», «Zebra Square». Сотрудничает с Борисом Зарьковым, в том числе ставит кухню в его первом проекте «Пуазон».',
    }
  },
  methods: {
  }
}
</script>

<style scoped>
input{
    width: 200px;
}
</style>
