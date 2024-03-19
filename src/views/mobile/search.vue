<template>
  <div class="search_container">
    <div class="search_title">查询防伪编号</div>
    <el-input v-model="input" placeholder="请输入防伪编号" class="search_input" />
    <el-button type="primary" @click="handleSearch" class="search_button">查询</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
const emit = defineEmits(['search']); //引入 emit

const handleSearch = () => {
  // 这里编写您的查询逻辑
  // 将用户输入的防伪编号作为参数传递给 result 页面
  console.log(input.value);
  emit('search', input.value);
};
</script>

<!-- 样式复制到这里 -->
<style lang="scss" scoped>
.search_container {
  width: 90%;

  .search_title {
    width: 100%;
    color: white;
    text-align: center;
    margin-bottom: 25px;
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .search_input {
    width: 100%;
    height: 51px;
    border-radius: 10px;
  }

  .search_button {
    width: 100%;
    height: 53px;
  }
}

.el-button {
  margin-top: 35px;
}
</style>
