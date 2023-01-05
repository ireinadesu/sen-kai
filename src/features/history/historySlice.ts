import { historySliceState } from "@/types/historySliceState"
import { createSlice } from "@reduxjs/toolkit"

/**
 *@Description: 初始化切片state
* @author:iReina
* @Date:2023-01-03 10:23:03
*/
const initialState: historySliceState[] = [
    // { id: 0, title: '魔女之旅' },
    // { id: 1, title: '虫师' },
    // { id: 2, title: '影之宅' }
]

/**
 *@Description: 创建切片
* @author:iReina
* @Date:2023-01-03 10:26:18
*/


const historySlice = createSlice({
    name: 'history',
    initialState: initialState.reverse(),
    reducers: {
        insert: (state, action) => {
            let flag = false
            state.map((history) => {
                if (history.title.trim() === action.payload.title.trim()) flag = true
                return history
            })
            if (flag) return state
            const newState: historySliceState[] = JSON.parse(JSON.stringify(state))
            newState.push({ id: newState.length !== 0 ? newState[newState.length - 1].id + 1 : 0, title: action.payload.title })
            return newState
        },
        delete: (state, action) => {
            const newState: historySliceState[] = []
            state.map((history) => {
                if (history.id !== action.payload.id) {
                    newState.push({ id: history.id, title: history.title })
                    if (newState[newState.length - 1].id > action.payload.id) newState[newState.length - 1].id--
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
