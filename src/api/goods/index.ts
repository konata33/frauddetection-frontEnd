import request from '@/utils/http';

export const goodsList = (): Promise<App.RequestTableResult> => {
  return request.get(`/api/goods`);
};

export const goodsCreate = (data: any) => {
  return request.post('/api/goods', data);
};

export const goodsEdit = (data: any) => {
  return request.put(`/api/goods/${data.id}`, data);
};

export const goodsDelete = (id: string) => {
  return request.delete(`/api/goods/${id}`);
};
