import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'dashboard',
  path: '/dashboard',
  component: () => import('@/layout/index.vue'),
  redirect: '/dashboard/analysis',
  meta: {
    title: 'menus.dashboard',
    icon: 'el-icon-odometer',
    sort: 0
  },
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: 'menus.analysis',
        icon: 'el-icon-dataLine',
        affix: true
      }
    }
  ]
} as RouteRecordRaw;
