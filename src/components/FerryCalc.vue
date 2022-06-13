<template>
  <div class="calculate">
    <h2>Расчитать примерную стоимость грузоперевозки</h2>
    <form action="#" @submit.prevent="calculate">
      <div v-if="!isCalc">
        <label for="distance">* Примерное расстояние (км.)</label>
        <input
          :class="{ invalid: disErr }"
          v-model="distance"
          type="text"
          id="distance"
          @input="disErr = false"
        />
        <small v-if="this.disErr">Это поле обязательно</small>
        <label for="length">* Длина груза (м.)</label>
        <input
          :class="{ invalid: lenErr }"
          v-model="length"
          type="text"
          id="length"
          @input="lenErr = false"
        />
        <small v-if="this.lenErr">Это поле обязательно</small>
        <label for="width">* Ширина груза (м.)</label>
        <input
          :class="{ invalid: widErr }"
          v-model="width"
          type="text"
          id="width"
          @input="widErr = false"
        />
        <small v-if="this.widErr">Это поле обязательно</small>
        <label for="height">* Высота груза (м.)</label>
        <input
          :class="{ invalid: heigErr }"
          v-model="height"
          type="text"
          id="height"
          @input="heigErr = false"
        />
        <small v-if="this.heigErr">Это поле обязательно</small>
        <label for="weight">* Примерный вес (кг.)</label>
        <input
          :class="{ invalid: weigErr }"
          v-model="weight"
          type="text"
          id="weight"
          @input="weigErr = false"
        />
        <small v-if="this.weigErr">Это поле обязательно</small>
        <button class="btn">Рассчитать</button>
      </div>
      <div class="price" v-else>
        <h2>Примерная стоимость:</h2>
        <h3>{{ price }} <span>рублей</span></h3>
        <button class="btn" @click="recalculate">Перерасчитать</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCalc: false,
      distance: '',
      length: '',
      width: '',
      height: '',
      weight: '',
      disErr: false,
      lenErr: false,
      widErr: false,
      heigErr: false,
      weigErr: false
    }
  },
  methods: {
    calculate () {
      if (this.price !== 0 && this.price !== Infinity) {
        this.isCalc = true
      }
      this.distance === '' ? (this.disErr = true) : (this.disErr = false)
      this.length === '' ? (this.lenErr = true) : (this.lenErr = false)
      this.width === '' ? (this.widErr = true) : (this.widErr = false)
      this.height === '' ? (this.heigErr = true) : (this.heigErr = false)
      this.weight === '' ? (this.weigErr = true) : (this.weigErr = false)
    },
    recalculate () {
      this.distance = this.length = this.width = this.height = this.weight = ''
      this.isCalc = false
    }
  },
  computed: {
    price () {
      const result =
        ((+this.distance * +this.length * +this.width * +this.height) / 4000) *
        1000
      if (result < 1000) {
        return result + 800
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.calculate {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(0, 51, 71);
  small {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 2.5rem;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    color: red;
    margin-bottom: 3.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5rem;
    width: 400px;
    border: 1px solid #777;
    border-radius: 1rem;
  }
  label {
    margin-bottom: 1.2rem;
  }
  input {
    padding: 1rem 2rem;
    font-size: inherit;
    border: 1px solid #999;
    border-radius: 3px;
    margin-bottom: 0.7em;
  }
  .invalid {
    border-color: red;
  }
  .btn {
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
    margin-top: 1rem;
    &:hover {
      background-color: lighten(rgb(0, 183, 255), 10px);
    }
    &:active {
      background-color: darken(rgb(0, 183, 255), 5px);
    }
  }
}
.price {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  h2 {
    color: #fff;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
    span {
      color: red;
    }
  }
}
</style>
