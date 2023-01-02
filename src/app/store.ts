import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import headerReducer from '@/features/header/headerSlice'
import searchReducer from '@/features/search/searchSlice'
/**
 *@Description: 持久化配置
* @author:iReina
* @Date:2023-01-02 23:17:32
*/
const persistConfig = {
    key: 'root',
    storage: storage
}

/**
 *@Description: 合并reducer
* @author:iReina
* @Date:2023-01-02 23:17:21
*/
const rootReducer = combineReducers({
    headerReducer,
    searchReducer
})

/**
 *@Description: 暴露state类型
* @author:iReina
* @Date:2023-01-02 23:16:57
*/
export type RootState = ReturnType<typeof rootReducer>

/**
 *@Description: 持久化处理
* @author:iReina
* @Date:2023-01-02 23:16:42
*/
const persistedReducer = persistReducer(persistConfig, rootReducer)

/**
 *@Description: 暴露store
* @author:iReina
* @Date:2023-01-02 23:16:31
*/
export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }),
    }
)

/**
 *@Description: 暴露持久化persistor
* @author:iReina
* @Date:2023-01-02 23:14:48
*/
export const persistor = persistStore(store)

/**
 *@Description: 暴露store类型
* @author:iReina
* @Date:2023-01-02 23:13:52
*/
export type AppDispatch = typeof store.dispatch

/**
 *@Description: 暴露useAppDispatch
* @author:iReina
* @Date:2023-01-02 23:14:23
*/
export const useAppDispatch = () => useDispatch<AppDispatch>()