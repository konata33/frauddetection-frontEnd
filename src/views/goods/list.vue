<template>
  <div class="page-card h-full" v-loading="loading">
    <el-form inline>
      <el-form-item>
        <el-button type="default" @click="onAddOrUpdate()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column label="ID" type="index" align="center" />
      <el-table-column label="名称" prop="name" align="center" />
      <el-table-column label="标识" prop="securityCode" align="center" />
      <el-table-column label="创建时间" prop="created" align="center">
        <template #default="scope">
          {{ formatDate(scope.row.created) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="260" align="center">
        <template #default="scope">
          <el-button type="primary" link @click="onAddOrUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" link @click="onDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AddOrUpdate ref="addOrUpdateRef" @reload="loadTableData" />
  </div>
</template>

<script lang="ts" setup>
import { getMenuList } from '@/api/auth';
import { goodsDelete, goodsList } from '@/api/goods';
import { useTable } from '@/hooks/useTable';
import { ref } from 'vue';
import AddOrUpdate from './components/goodsItem.vue';

const addOrUpdateRef = ref();
const allMenuList = ref([]);

const { tableData, loading, getList } = useTable({
  apiFn: goodsList,
  isPageable: false
});

const loadTableData = () => {
  getList();
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0 indexed, so + 1 and pad with leading 0
  const day = date.getDate().toString().padStart(2, '0'); // pad with leading 0
  return `${year}-${month}-${day}`;
};

const onAddOrUpdate = (data?: Recordable) => {
  addOrUpdateRef.value.init(data);
};

const getAllMenuList = async () => {
  const { data } = await getMenuList();
  allMenuList.value = data;
};
getAllMenuList();

const onDelete = async (data: Recordable) => {
  await goodsDelete(data.id);
  getList();
};
</script>

<style lang="scss" scoped></style>
