import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'goods',
  path: '/goods',
  component: () => import('@/layout/index.vue'),
  redirect: '/goods/list',
  meta: {
    title: 'menus.goods',
    icon: 'el-icon-goods',
    sort: 0
  },
  children: [
    {
      name: 'goods_list',
      path: '/goods/list',
      component: () => import('@/views/goods/list.vue'),
      meta: {
        title: 'menus.goodsItem',
        icon: 'el-icon-goodsFilled',
        affix: true
      }
    }
  ]
} as RouteRecordRaw;
