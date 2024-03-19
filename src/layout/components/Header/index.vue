<template>
  <el-header class="header">
    <div class="flex-y-center h-full">
      <MenuCollapse />
      <Breadcrumb />
    </div>
    <div class="flex-y-center h-full">
      <Search />
      <FullScreen />
      <Language />
      <UserAvatar />
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue';
import FullScreen from './FullScreen.vue';
import Language from './Language.vue';
import MenuCollapse from './MenuCollapse.vue';
import Search from './Search.vue';
import UserAvatar from './UserAvatar.vue';
defineOptions({ name: 'PageHeader' });
</script>

<style lang="scss" scoped>
.header {
  @apply flex-y-center justify-between h-14 p-x-0 bg-[var(--el-bg-color)] shadow-[0_0_1px_#888];
}
</style>
