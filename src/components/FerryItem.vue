<template>
  <div class="truck">
    <div class="first-section">
      <img :src="path" alt="Truck" />
      <h2>
        Цена:<br />от <span>{{ price }}</span> рублей
      </h2>
    </div>
    <div class="second-section">
      <div>
        <h2>{{ title }}</h2>
        <p>
          Предлагаем в аренду машины для перевозки габаритных грузов. В нашем
          парке свыше 10 машин, в том числе газели, шаланды, камазы.
          Осуществляем перевозки по всей России. Оплату можно производить любым
          способом (Наличка и безнал). Работаем строго по договору.
          Предоставляем скидки за обьем. Будем рады сотрудничеству.
        </p>
        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </div>
      <button @click="modalToggle">Заказать</button>
      <teleport to="#app">
        <FerryModal v-if="modalOpen" @close="modalToggle" />
      </teleport>
    </div>
  </div>
</template>

<script>
import FerryModal from './FerryModal.vue'
export default {
  props: {
    price: Number,
    title: String,
    list: Array,
    path: String
  },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    modalToggle () {
      this.modalOpen = !this.modalOpen
      if (this.modalOpen) {
        document.body.style.overflow = 'hidden'
      } else document.body.style.overflow = 'auto'
    }
  },
  components: { FerryModal }
}
</script>

<style lang="scss" scoped>
.truck {
  margin-bottom: 4.5rem;
  display: flex;
}
.first-section {
  img {
    width: 500px;
    height: 350px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 3rem;
    text-align: center;
    line-height: 1.3;
    span {
      color: red;
    }
  }
}
.second-section {
  padding: 2rem 3.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
  div {
    flex: 1 1 auto;
  }
  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  ul {
    font-size: 1.8rem;
    padding-left: 3rem;
    list-style: initial;
  }
  li {
    margin-bottom: 1.5rem;
  }
  button {
    width: 150px;
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
    &:hover {
      background-color: lighten(rgb(0, 183, 255), 10);
    }
    &:active {
      background-color: darken(rgb(0, 183, 255), 10);
    }
  }
}
</style>
