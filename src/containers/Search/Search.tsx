import { AutoComplete, Button, Input, Space } from 'antd'
import { connect } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'

import SearchCss from './Search.module.scss'
import { actions, historySliceState } from '../../features/history/historySlice'
import { AppDispatch, RootState } from '@/app/store'

const Search = (props: any) => {

    const options = [
        {
            label: (<div>搜索记录</div>),
            options: props.history.map((h: historySliceState) => {
                return ({
                    value: h.title,
                    label: (
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            {h.title}
                            <span>
                                <Button onClick={(event) => { props.delete(h); event.stopPropagation() }} ghost={true} type="primary" shape="circle" icon={<DeleteOutlined />} />
                            </span>
                        </div>
                    ),
                })
            }),
        }
    ]

    const onSearch = (value: string) => console.log(value);

    return (
        <Space>
            <AutoComplete popupClassName="certain-category-search-dropdown" style={{ width: 250 }} options={options}>
                <Input.Search className={SearchCss['search']} placeholder="今天看点什么好呢..." onSearch={onSearch} enterButton />
            </AutoComplete>
        </Space>
    )
}

const mapStateToProps = (state: RootState) => ({
    history: state.history
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        insert: (payload: historySliceState) => {
            dispatch(actions.insert(payload))
        },
        delete: (payload: historySliceState) => {
            dispatch(actions.delete(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)