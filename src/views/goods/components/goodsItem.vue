<template>
  <el-dialog v-model="visible" :title="form.id ? '编辑' : '添加'" width="550px" @closed="onReset">
    <el-form :model="form" label-width="55px" ref="formRef" :rules="rules">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" clearable />
      </el-form-item>
      <el-form-item label="标识" prop="securityCode">
        <el-input v-model="form.securityCode" placeholder="请输入标识" clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="onConfrim(formRef)">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { goodsCreate, goodsEdit } from '@/api/goods';
import type { IRoleItem } from '@/api/role/type';
import type { FormInstance, FormRules } from 'element-plus';
import { nextTick, reactive, ref } from 'vue';

const emit = defineEmits(['reload']);
const visible = ref(false);
const formRef = ref<FormInstance>();
const isAddOrEdit = ref(true);
const form = reactive({
  id: 0,
  securityCode: '',
  name: ''
});

const validateSecurityCode = (rule: any, value: any, callback: any) => {
  const reg = /[\u4e00-\u9fa5]/;
  if (reg.test(value)) {
    callback(new Error('标识不能包含中文字符'));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof form>>({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  securityCode: [
    { validator: validateSecurityCode, required: true, message: '不允许中文标识', trigger: 'blur' }
  ]
});

const init = async (data?: IRoleItem) => {
  visible.value = true;
  if (data) {
    await nextTick();
    Object.assign(form, data);
    isAddOrEdit.value = false;
  } else {
    form.id = 0;
    form.securityCode = '';
    form.name = '';
    isAddOrEdit.value = true;
  }
};

const onConfrim = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid: any) => {
    if (valid) {
      if (isAddOrEdit.value) {
        await goodsCreate(form);
      } else {
        await goodsEdit(form);
      }
      visible.value = false;
      emit('reload');
    } else {
      return false;
    }
  });
};

const onReset = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};
defineExpose({ init });
</script>

<style lang="scss" scoped></style>
