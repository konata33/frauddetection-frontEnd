import request from '@/utils/http';

/** 登录 */
export const login = (data: object): Promise<{ token: string }> => {
  return request.post('/api/users/login', data);
};

/** 获取用户信息 */
export const getUserInfo = () => {
  return request.get('/api/users/userInfo');
};

/** 获取tree菜单列表 */
export const getMenuList = (): Promise<App.RequestResult> => {
  return request.get('/mock/api/menuList');
};
