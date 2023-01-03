import { combineReducers } from "@reduxjs/toolkit";

import routerReducer from '@/features/router/routerSlice'
import historyReducer from '@/features/history/historySlice'
/**
 *@Description: 合并reducer
* @author:iReina
* @Date:2023-01-02 23:17:21
*/
export default combineReducers({
    router: routerReducer,
    history: historyReducer
})