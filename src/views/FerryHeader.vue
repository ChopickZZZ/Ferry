<template>
  <header class="header">
    <div class="container">
      <img
        style="cursor: pointer"
        src="../assets/Logo.jpg"
        class="header__logo"
        @click="$router.push('/')"
      />
      <div class="header__address">
        <h2>195345, Стерлитамак, Домостроительная 16/3</h2>
        <h3>3 этаж, кабинет Б</h3>
      </div>
      <div class="header__email">
        <h2>Logistic@mail.ru</h2>
        <h3>Сотрудничество. Работаем с 09:00 до 19:00</h3>
      </div>
      <div class="header__phone">
        <h2>+7917567XXXX</h2>
        <h3>Ждем вашего звонка.</h3>
      </div>
      <button class="header__btn" @click="modalToggle">Перезвоните мне</button>
      <teleport to="#app">
        <FerryModal v-if="modalOpen" @close="modalToggle" />
      </teleport>
    </div>
  </header>
</template>

<script>
import FerryModal from '../components/FerryModal.vue'
export default {
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
.header {
  .container {
    display: flex;
    align-items: center;
    column-gap: 6rem;
  }
  &__address {
    width: 200px;
    h2 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
  &__email {
    width: 200px;
    h2 {
      font-weight: 700;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
  &__phone {
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
  &__btn {
    display: inline-flex;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: inherit;
    background-color: rgb(129, 5, 5);
    outline: none;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      background-color: darken(rgb(129, 5, 5), 5);
    }
  }
  img {
    width: 130px;
    height: 130px;
  }
}
</style>
