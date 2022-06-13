<template>
  <div class="modal modal-container">
    <div class="modal__backdrop" @click="$emit('close')"></div>
    <form
      class="modal__main"
      action="#"
      v-if="modalDone"
      @submit.prevent="$emit('close')"
    >
      <h3>Спасибо за заказ!</h3>
      <p>
        Ваш заказ принят в обработку.<br />
        Мы свяжемся с вами в ближайшее время.
      </p>
      <button class="btn-done">Готово</button>
    </form>
    <form class="modal__main" action="#" @submit.prevent="modalSubmit" v-else>
      <h3>Оформить заявку</h3>
      <div>
        <label for="tel">Телефон</label>
        <input
          type="tel"
          v-model="phone"
          :class="{ invalid: phoneErr }"
          @input="phoneErr = false"
        />
        <small style="color: red; margin-bottom: 2rem" v-if="phoneErr"
          >Некорректно введен номер</small
        >
        <button>Отправить заявку</button>
        <small
          >*Нажимая на кнопку вы даете согласие на обработку персональных
          данных</small
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  mounted () {
    if (this.isOpen) this.modalDone = true
  },
  data () {
    return {
      phone: '+7',
      modalDone: false,
      phoneErr: false
    }
  },
  methods: {
    modalSubmit () {
      if (this.phone.length === 12) this.modalDone = true
      else this.phoneErr = true
    }
  },
  emits: {
    close: null
  }
}
</script>

<style lang="scss" scoped>
.btn-done {
  background-color: rgb(37, 37, 37) !important;
  margin: 0 !important;
  width: 150px !important;
  align-self: center !important;
  &:hover {
    background-color: darken(rgb(37, 37, 37), 10) !important;
  }
}
.invalid {
  border-color: red !important;
  margin-bottom: 0.7rem !important;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  &__main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 5rem 4rem;
    color: #000;
    background-color: #fff;
    border-radius: 1rem;
    h3 {
      text-align: center;
      font-weight: 700;
      font-size: 2.2rem;
      margin-bottom: 3rem;
    }
    p {
      line-height: 1.5;
      text-align: center;
      margin-bottom: 3rem;
    }
    div {
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
      margin-bottom: 2.5rem;
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
        background-color: lighten(rgb(0, 183, 255), 10px);
      }
      &:active {
        background-color: darken(rgb(0, 183, 255), 5px);
      }
    }
    small {
      color: #777;
    }
  }
  &__backdrop {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    cursor: pointer;
  }
}
</style>
