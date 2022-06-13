<template>
  <main class="page">
    <div class="lend">
      <div class="container">
        <div class="first">
          <h1>Аренда шаланды в Стерлитамаке</h1>
          <ul>
            <li>Свой парк техники</li>
            <li>В парке 7 машин</li>
            <li>Быстрая подача машины</li>
            <li>Наличный и безналичный расчет</li>
            <li>От 45 рублей за км.</li>
            <li>Смена машины <span>от 5000 рублей</span></li>
          </ul>
          <h2>Предоставим всевозможные грузовые автомобили</h2>
        </div>
        <div class="second">
          <h3>Получить консультацию</h3>
          <form action="#" @submit.prevent="modalActive">
            <label for="name">Имя</label>
            <input
              :class="{ invalid: nameErr }"
              type="text"
              v-model="name"
              @input="nameErr = false"
            />
            <small style="color: red; margin-bottom: 2.5rem" v-if="nameErr"
              >Введите имя</small
            >
            <label for="tel">Телефон</label>
            <input
              :class="{ invalid: telephoneErr }"
              type="tel"
              v-model="telephone"
              @input="telephoneErr = false"
            />
            <small style="color: red; margin-bottom: 2.5rem" v-if="telephoneErr"
              >Некорректно введен номер</small
            >
            <button>Отправить заявку</button>
            <small
              >*Нажимая на кнопку вы даете согласие на обработку персональных
              данных</small
            >
          </form>
          <teleport to="#app">
            <FerryModal v-if="modalOpen" @close="modalClose" :isOpen="true" />
          </teleport>
        </div>
      </div>
    </div>
    <div class="cars">
      <div class="container">
        <h2>Заказать автомобиль</h2>
        <p>Вся техника в собственности</p>
        <div class="grid">
          <FerryTruck
            v-for="truck in trucks"
            :key="truck"
            :img="truck.img"
            :title="truck.title"
            :list="truck.list"
            :subTitle="truck.subTitle"
          />
        </div>
      </div>
    </div>
    <FerryCalc />
    <div class="how">
      <div class="container">
        <h2>Как мы перевозим грузы ?</h2>
        <ul>
          <li>Забираем ваш груз со склада</li>
          <li>Доставляем на свой склад и упаковываем</li>
          <li>
            Ищем оптимальную логистику (объединяем несколько видов транспорта
            при необходимости)
          </li>
          <li>Отправляем груз (страхуем и даем гарантию сохранности)</li>
          <li>Доставляем груз до адреса получателя</li>
        </ul>
      </div>
    </div>
    <FerryOrder />
  </main>
</template>

<script>
import FerryTruck from '../components/FerryTruck.vue'
import FerryCalc from '../components/FerryCalc.vue'
import FerryModal from '../components/FerryModal.vue'
import FerryOrder from '../components/FerryOrder.vue'
export default {
  data () {
    return {
      modalOpen: false,
      name: '',
      telephone: '',
      nameErr: false,
      telephoneErr: false,
      trucks: [
        {
          img: 'https://bcam.msk.ru/wp-content/uploads/2019/01/maxresdefault.jpg',
          title: 'Аренда газели',
          list: [
            'Грузоподъемность: до 8 тонн',
            'Длина: 8 м.',
            'Ширина 2.5 м.',
            'Есть ремни',
            'От 35 рублей км',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 1000 руб./час'
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=ed796579565e617bf2cf070aed007f5e-4578567-images-thumbs&n=13&exp=1',
          title: 'Аренда шаланды 9м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 9 м.',
            'Ширина 2.45 м.',
            'Есть ремни',
            'Укороченный борт',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 6500р.'
        },
        {
          img: 'https://tyumen.mastermario.ru/s_images/goods/117d63ec2205671c2fc7e154830dc27f.jpg',
          title: 'Аренда шаланды 12м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 12 м.',
            'Ширина 2.45 м.',
            'Есть ремни',
            'Укороченный борт',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 7000р.'
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=ba4098cbd69c1d81297c8ac56095361a-5904837-images-thumbs&n=13&exp=1',
          title: 'Аренда шаланды 16м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 16 м.',
            'Ширина 2.45 м.',
            'Есть ремни',
            'Возим с выносом',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 6500р.'
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=06fa676f45dc9ad97db04bee1bd01385-5869639-images-thumbs&n=13&exp=1',
          title: 'Аренда еврофуры',
          list: [
            'Грузоподъемность: 20 тонн',
            'Длина: 13.6 м.',
            'Ширина 2.5 м.',
            'Полная растентовка',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 8000р.'
        },
        {
          img: 'https://img5.okidoki.st/c/6/7/2/572458/6985901/14945820_2.jpg',
          title: 'Бортовой длинномер',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 9 м.',
            'Ширина 2.45 м.',
            'Есть ремни',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 7000р.'
        },
        {
          img: 'https://daktrans.ru/upload/iblock/bb9/bb9056d3d559f6285419b2950f584405.jpg',
          title: 'Бортовой автомобиль',
          list: [
            'Грузоподъемность: 10 тонн',
            'Длина: 6 м.',
            'Ширина 2.4 м.',
            'Есть ремни',
            'Укороченный борт',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 6000р.'
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=2a0000017a0adec13ca2e1e1bc6c9d8fdd7e-4464285-images-thumbs&n=13&exp=1',
          title: 'Шаланда с манипулятором',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 13.6 м.',
            'Ширина 2.45 м.',
            'Стрела 5 тонн',
            'Минималка: 6 + 1 час'
          ],
          subTitle: 'от 8500р.'
        }
      ]
    }
  },
  methods: {
    modalActive () {
      if (!this.name.length) {
        this.nameErr = true
      }
      if (this.telephone.length !== 12) {
        this.telephoneErr = true
      } else {
        this.modalOpen = true
        document.body.style.overflow = 'hidden'
        this.name = ''
        this.telephone = ''
      }
    },
    modalClose () {
      this.modalOpen = false
      document.body.style.overflow = 'auto'
    }
  },
  components: { FerryTruck, FerryCalc, FerryModal, FerryOrder }
}
</script>

<style lang="scss" scoped>
.invalid {
  border-color: red !important;
  margin-bottom: 0.7rem !important;
}
.order {
  padding: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    color: red;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
  label {
    margin-bottom: 1.2rem;
  }
  input {
    width: 400px;
    padding: 1rem 2rem;
    font-size: inherit;
    border: 1px solid #999;
    border-radius: 3px;
    margin-bottom: 2.5rem;
  }
  button {
    display: inline-flex;
    justify-content: center;
    align-self: center;
    width: 200px;
    padding: 1.25rem 2.5rem;
    font-size: inherit;
    letter-spacing: 1px;
    background-color: rgb(129, 5, 5);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;
    margin-top: 1rem;
    &:hover {
      background-color: lighten(rgb(129, 5, 5), 10px);
    }
    &:active {
      background-color: darken(rgb(129, 5, 5), 5px);
    }
  }
}
.how {
  padding: 3rem 0;
  h2 {
    font-weight: 700;
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
  ul {
    list-style: initial;
  }
  li {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    &:last-child {
      margin: 0;
    }
  }
}
.lend {
  background-image: url("https://i.pinimg.com/originals/bd/20/50/bd2050082719109b9d78986b1b077c1f.jpg");
  background-position: center;
  background-size: cover;
  height: 530px;
  .container {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    height: 100%;
  }
}

.first {
  flex: 0 1 80%;
  background-color: rgba(34, 27, 27, 0.92);
  backdrop-filter: blur(2px);
  padding: 4rem;
  border-radius: 1.5rem;
  h1 {
    font-size: 5.2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 3rem;
  }
  ul {
    list-style: initial;
    margin-left: 3.5rem;
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    span {
      color: red;
      font-weight: 700;
    }
  }
  h2 {
    font-size: 2.2rem;
    line-height: 1.2;
  }
}
.second {
  display: flex;
  flex-direction: column;
  padding: 4rem;
  color: #000;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 1.5rem;
  small {
    color: #333;
  }
  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  input {
    padding: 1rem 2rem;
    font-size: inherit;
    margin-bottom: 3rem;
    border: 1px solid #999;
    border-radius: 3px;
  }
  button {
    display: inline-flex;
    justify-content: center;
    padding: 1.25rem 2.5rem;
    font-size: inherit;
    letter-spacing: 1px;
    background-color: rgb(0, 183, 255);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;
    margin-bottom: 2.5rem;
    &:hover {
      background-color: lighten(rgb(0, 183, 255), 5px);
    }
    &:active {
      background-color: darken(rgb(0, 183, 255), 5px);
    }
  }
}
.cars {
  padding: 3.5rem;
  border-bottom: 1px solid rgb(0, 51, 71);
  .container {
    max-width: 1260px;
  }
  h2 {
    text-align: center;
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  p {
    text-align: center;
    color: red;
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  .grid {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
  }
}
</style>
