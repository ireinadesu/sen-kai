/**
 *@Description: 定义ruoter slice的state类型
* @author:iReina
* @Date:2023-01-03 10:22:15
*/
export interface routerSliceState {
    [x: string]: any;
    current_url: string
}