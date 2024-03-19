<template>
  <div class="result_container">
    <div class="result_box">
      <div class="result_title">查询结果为</div>
      <div class="result_result" :class="resultData ? 'classForAuthentic' : 'classForNotFound'">
        {{ resultData ? '正品' : '未能查询到' }}
      </div>
      <div class="result_detail" v-if="resultData">
        <div>
          产品名称: <span>{{ resultData.name }}</span>
        </div>
        <div>
          产品编号: <span>{{ resultData.security_code }}</span>
        </div>
        <div>
          创建时间: <span>{{ formatDate(resultData.created) }}</span>
        </div>
      </div>
      <div v-if="!resultData" class="result_tip">请确认产品编号是否输入正确</div>
      <el-button @click="goBack" type="primary" class="result_btn">返回</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchResultFromCode } from '@/api/app';
import { searchResultItem } from '@/api/app/type';
import { ref, watch } from 'vue';

const emit = defineEmits(['goBack']); //引入 emit
const resultData = ref<searchResultItem | false>();

const props = defineProps({
  searchValue: String
});

watch(props, async () => {
  const searchResult = await searchResultFromCode(props.searchValue as string);
  resultData.value = searchResult ? searchResult : false;
});

const goBack = () => {
  emit('goBack');
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0 indexed, so + 1 and pad with leading 0
  const day = date.getDate().toString().padStart(2, '0'); // pad with leading 0
  return `${year}-${month}-${day}`;
};
</script>

<style lang="scss" scoped>
.result_container {
  width: 90%;
  .result_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    .result_title {
      font-size: 35px;
    }
    .result_result {
      font-size: 32px;
    }
    .classForAuthentic {
      color: green;
    }
    .classForNotFound {
      color: red;
    }
    .result_detail {
      margin-top: 18px;
      font-size: 25px;
      div {
        span {
          margin-left: 20px;
          letter-spacing: 2px;
          font-size: 20px;
        }
      }
    }
    .result_tip {
      margin-top: 10px;
      color: gray;
      font-size: 18px;
    }
    .result_btn {
      width: 100%;
      margin-top: 25px;
    }
  }
}
</style>
