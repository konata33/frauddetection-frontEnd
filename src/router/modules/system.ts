import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/system',
  name: 'system',
  redirect: '/system/menu',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'menus.systemManagement',
    icon: 'el-icon-setting',
    sort: 5,
    isHide: true
  },
  children: [
    {
      path: '/system/user',
      name: 'system_user',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: 'menus.userManagement',
        icon: 'el-icon-user'
      }
    }
  ]
} as RouteRecordRaw;
