import { historySliceState } from "@/types/historySliceState"
import { createSlice } from "@reduxjs/toolkit"

/**
 *@Description: 初始化切片state
* @author:iReina
* @Date:2023-01-03 10:23:03
*/
const initialState: historySliceState[] = [
    { id: '1', title: '魔女之旅' },
    { id: '2', title: '虫师' },
    { id: '3', title: '影之宅' }
]

/**
 *@Description: 创建切片
* @author:iReina
* @Date:2023-01-03 10:26:18
*/


const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        insert: (state, action) => {
            return [...state, { id: '4', title: '想要成为影之实力者' }]
        },
        delete: (state, action) => {
            const newState: historySliceState[] = []
            state.map((history) => {
                if (history.id !== action.payload.id) {
                    newState.push({ id: history.id, title: history.title })
                }
                return history
            })
            return newState
        }
    },
})

/**
 *@Description: 暴露actions
* @author:iReina
* @Date:2023-01-03 10:27:13
*/
export const { actions } = historySlice

/**
 *@Description: 默认暴露reducer
* @author:iReina
* @Date:2023-01-03 10:26:31
*/
export default historySlice.reducer
