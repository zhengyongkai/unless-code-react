import { configureStore } from '@reduxjs/toolkit';

import dragSlice from './common/dragSlice';
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    dragSlice
  }
});

export default store;
