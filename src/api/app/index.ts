import request from '@/utils/http';
import { searchResultItem } from './type';

export const searchResultFromCode = (code: string): Promise<searchResultItem> => {
  return request.get(`/api/goods/${code}`);
};
