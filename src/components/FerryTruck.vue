<template>
  <div class="item">
    <div class="content">
      <div class="img-container">
        <img :src="img" alt="" />
      </div>
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </div>
    <h4>
      Цена аренды: <span>{{ subTitle }}</span>
    </h4>
    <div class="buttons">
      <button @click="modalToggle">Заказать</button>
      <button @click="$router.push('/trucks')">Информация</button>
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
    img: String,
    title: String,
    list: Array,
    subTitle: String
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
.item {
  width: 260px;
  height: 510px;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1 1 auto;
  }
  .img-container {
    width: 100%;
    height: 195px;
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  h3 {
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }
  ul {
    list-style: initial;
    margin-bottom: 3rem;
    margin-left: 2.5rem;
  }
  li {
    margin-bottom: 0.7rem;
  }
  h4 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    span {
      color: red;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    button {
      outline: none;
      border: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      padding: 1rem 2rem;
      color: #fff;
      background-color: rgb(1, 124, 173);
      font-size: inherit;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        color: rgb(1, 124, 173);
        background-color: #fff;
      }
      &:last-child {
        background-color: #fff;
        border: 2px solid rgb(1, 124, 173);
        color: rgb(1, 124, 173);
        &:hover {
          color: #fff;
          background-color: rgb(1, 124, 173);
        }
        &:active {
          background-color: darken(rgb(1, 124, 173), 10);
        }
      }
    }
  }
}
</style>
