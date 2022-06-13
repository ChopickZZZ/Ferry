<template>
  <div class="container">
    <div class="trucks-page">
      <FerryItem
        v-for="item in trucks"
        :key="item"
        :path="item.img"
        :title="item.title"
        :list="item.list"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
import FerryItem from '../components/FerryItem.vue'
export default {
  data () {
    return {
      trucks: [
        {
          img: 'https://bcam.msk.ru/wp-content/uploads/2019/01/maxresdefault.jpg',
          title: 'Аренда газели',
          list: [
            'Грузоподъемность: до 8 тонн',
            'Длина: 8 м.',
            'Ширина 2.5 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 1000
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=ed796579565e617bf2cf070aed007f5e-4578567-images-thumbs&n=13&exp=1',
          title: 'Аренда шаланды 9м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 9 м.',
            'Ширина 2.45 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 6500
        },
        {
          img: 'https://tyumen.mastermario.ru/s_images/goods/117d63ec2205671c2fc7e154830dc27f.jpg',
          title: 'Аренда шаланды 12м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 12 м.',
            'Ширина 2.45 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 7000
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=ba4098cbd69c1d81297c8ac56095361a-5904837-images-thumbs&n=13&exp=1',
          title: 'Аренда шаланды 16м.',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 16 м.',
            'Ширина 2.45 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 6500
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=06fa676f45dc9ad97db04bee1bd01385-5869639-images-thumbs&n=13&exp=1',
          title: 'Аренда еврофуры',
          list: [
            'Грузоподъемность: 20 тонн',
            'Длина: 13.6 м.',
            'Ширина 2.5 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 8000
        },
        {
          img: 'https://img5.okidoki.st/c/6/7/2/572458/6985901/14945820_2.jpg',
          title: 'Бортовой длинномер',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 9 м.',
            'Ширина 2.45 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 7000
        },
        {
          img: 'https://daktrans.ru/upload/iblock/bb9/bb9056d3d559f6285419b2950f584405.jpg',
          title: 'Бортовой автомобиль',
          list: [
            'Грузоподъемность: 10 тонн',
            'Длина: 6 м.',
            'Ширина 2.4 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 6000
        },
        {
          img: 'https://avatars.mds.yandex.net/i?id=2a0000017a0adec13ca2e1e1bc6c9d8fdd7e-4464285-images-thumbs&n=13&exp=1',
          title: 'Шаланда с манипулятором',
          list: [
            'Грузоподъемность: до 20 тонн',
            'Длина: 13.6 м.',
            'Ширина 2.45 м.',
            'Минималка: 6 + 1 час'
          ],
          price: 8500
        }
      ]
    }
  },
  components: { FerryItem }
}
</script>

<style lang="scss" scoped>
.trucks-page {
  padding: 4rem 0;
}
</style>
