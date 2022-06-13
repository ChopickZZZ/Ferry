<template>
  <div class="order">
    <div v-if="orderDone">
      <h2>Заявка успешно оставлена.</h2>
      <ul>
        <li>Откуда: {{ from }}</li>
        <li>Куда: {{ to }}</li>
        <li>Вес: {{ weight }} кг.</li>
        <li>Ваш номер: {{ number }}</li>
      </ul>
      <button @click="removeOrder">Перезаписаться</button>
    </div>
    <div v-else>
      <h2>Оставьте заявку, это займет всего 30 секунд</h2>
      <form action="#" @submit.prevent="formSubmit">
        <label for="from">Откуда</label>
        <input
          @input="fromErr = false"
          :class="{ invalid: fromErr }"
          v-model="from"
          type="text"
          id="from"
        />
        <small style="color: red; margin-bottom: 2.5rem" v-if="fromErr"
          >Это поле обязательно для ввода</small
        >
        <label for="to">Куда</label>
        <input
          @input="toErr = false"
          :class="{ invalid: toErr }"
          v-model="to"
          type="text"
          id="to"
        />
        <small style="color: red; margin-bottom: 2.5rem" v-if="toErr"
          >Это поле обязательно для ввода</small
        >
        <label for="weight">Вес груза (кг.)</label>
        <input
          @input="weightErr = false"
          :class="{ invalid: weightErr }"
          v-model="weight"
          type="text"
          id="weight"
        />
        <small style="color: red; margin-bottom: 2.5rem" v-if="weightErr"
          >Это поле обязательно для ввода</small
        >
        <label for="tel">Ваш номер телефона</label>
        <input
          @input="numberErr = false"
          :class="{ invalid: numberErr }"
          v-model="number"
          type="text"
          id="tel"
        />
        <small style="color: red; margin-bottom: 2.5rem" v-if="numberErr"
          >Некорректно набран номер</small
        >
        <button>Отправить заявку</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.loadOrder()
  },
  data () {
    return {
      orderDone: false,
      from: '',
      to: '',
      weight: '',
      number: '',
      fromErr: false,
      toErr: false,
      weightErr: false,
      numberErr: false
    }
  },
  methods: {
    async loadOrder () {
      try {
        const res = await fetch(
          'https://ferry-536a3-default-rtdb.europe-west1.firebasedatabase.app/order.json'
        )
        const data = await res.json()
        const [orderObj] = Object.values(data)
        this.from = orderObj.from
        this.to = orderObj.to
        this.weight = orderObj.weight
        this.number = orderObj.number
        this.orderDone = true
      } catch (e) {
        console.error(e.message)
      }
    },
    async removeOrder () {
      this.orderDone = false
      this.fromErr = this.toErr = this.weightErr = this.numberErr = false
      this.from = this.to = this.weight = this.number = ''
      await fetch(
        'https://ferry-536a3-default-rtdb.europe-west1.firebasedatabase.app/order.json',
        {
          method: 'DELETE'
        }
      )
    },
    async formSubmit () {
      const order = {
        from: this.from,
        to: this.to,
        weight: this.weight,
        number: this.number
      }
      if (this.from === '') {
        this.fromErr = true
      }
      if (this.to === '') {
        this.toErr = true
      }
      if (this.weight === '') {
        this.weightErr = true
      }
      if (this.number.length !== 12) {
        this.numberErr = true
      } else {
        await fetch(
          'https://ferry-536a3-default-rtdb.europe-west1.firebasedatabase.app/order.json',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/JSON'
            },
            body: JSON.stringify(order)
          }
        )
        this.orderDone = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  padding: 3.5rem 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
  }
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
.invalid {
  border-color: red !important;
  margin-bottom: 0.7rem !important;
}
</style>
