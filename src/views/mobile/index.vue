<template>
  <div class="container_box" :style="{ backgroundImage: `url(${searchBg})` }">
    <el-main class="main_content">
      <transition name="el-zoom-in-center">
        <search-component v-if="!resultShown" @search="showResult" />
        <search-result v-else :search-value="searchValue" @goBack="goBack" />
      </transition>
    </el-main>
  </div>
</template>

<script lang="ts" setup>
import searchBg from '@/assets/image/searchBackground.png';
import { ref } from 'vue';
import searchResult from './result.vue';
import searchComponent from './search.vue';

// 创建一个局部状态来追踪是否显示 searchResult 组件
const resultShown = ref(false);
const searchValue = ref(''); // 存储搜索值的变量

// 顶级状态更改的方法
const showResult = (value: string) => {
  // 搜索事件处理函数现在可以接收一个值
  resultShown.value = true;
  searchValue.value = value; // 把接收到的值存储下来
};
const goBack = () => {
  // 添加 goBack 方法来处理 goBack 事件
  resultShown.value = false;
};
</script>

<style lang="scss" scoped>
.container_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  .main_content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
