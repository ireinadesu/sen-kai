import { routerSliceState } from '@/types/routerSliceState'
import { createSlice } from '@reduxjs/toolkit'


/**
 *@Description: 初始化切片state
* @author:iReina
* @Date:2023-01-03 10:23:03
*/
const initialState: routerSliceState = { currentUrl: '/recommend' }

/**
 *@Description: 创建切片
* @author:iReina
* @Date:2023-01-03 10:26:18
*/
const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        changeUrl: (state, action) => {
            return { ...state, currentUrl: action.payload.currentUrl }
        }
    }
})

/**
 *@Description: 暴露actions
* @author:iReina
* @Date:2023-01-03 10:27:13
*/
export const { actions } = routerSlice

/**
 *@Description: 默认暴露reducer
* @author:iReina
* @Date:2023-01-03 10:26:31
*/
export default routerSlice.reducer